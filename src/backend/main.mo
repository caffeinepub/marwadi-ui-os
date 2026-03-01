import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type App = {
    id : Nat;
    name : Text;
    hindiName : Text;
    icon : Text;
    category : Text;
    color : Text;
  };

  type Preferences = {
    wallpaper : Text;
    language : Text;
  };

  let apps = Map.empty<Nat, App>();
  var openApp : ?Nat = null;
  var preferences : Preferences = {
    wallpaper = "default";
    language = "en";
  };

  let appUsage = Map.empty<Nat, Nat>();

  public shared ({ caller }) func addApp(id : Nat, name : Text, hindiName : Text, icon : Text, category : Text, color : Text) : async () {
    if (apps.containsKey(id)) { Runtime.trap("App ID already exists") };
    let app : App = {
      id;
      name;
      hindiName;
      icon;
      category;
      color;
    };
    apps.add(id, app);
    appUsage.add(id, 0);
  };

  public shared ({ caller }) func openAppById(id : Nat) : async () {
    if (not apps.containsKey(id)) { Runtime.trap("App does not exist") };
    openApp := ?id;
    let currentUsage = switch (appUsage.get(id)) {
      case (null) { 0 };
      case (?count) { count };
    };
    appUsage.add(id, currentUsage + 1);
  };

  public shared ({ caller }) func closeApp() : async () {
    openApp := null;
  };

  public shared ({ caller }) func updatePreferences(wallpaper : Text, language : Text) : async () {
    preferences := {
      wallpaper;
      language;
    };
  };

  public query ({ caller }) func getAllApps() : async [App] {
    apps.values().toArray();
  };

  public query ({ caller }) func getOpenApp() : async ?Nat {
    openApp;
  };

  public query ({ caller }) func getPreferences() : async Preferences {
    preferences;
  };

  public query ({ caller }) func getAppUsage(id : Nat) : async Nat {
    switch (appUsage.get(id)) {
      case (null) { 0 };
      case (?count) { count };
    };
  };
};
