import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface App {
    id: bigint;
    icon: string;
    name: string;
    color: string;
    hindiName: string;
    category: string;
}
export interface Preferences {
    wallpaper: string;
    language: string;
}
export interface backendInterface {
    addApp(id: bigint, name: string, hindiName: string, icon: string, category: string, color: string): Promise<void>;
    closeApp(): Promise<void>;
    getAllApps(): Promise<Array<App>>;
    getAppUsage(id: bigint): Promise<bigint>;
    getOpenApp(): Promise<bigint | null>;
    getPreferences(): Promise<Preferences>;
    openAppById(id: bigint): Promise<void>;
    updatePreferences(wallpaper: string, language: string): Promise<void>;
}
