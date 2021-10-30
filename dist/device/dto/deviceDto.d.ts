export declare class PersistDeviceDto {
    readonly name: string;
    readonly price: number;
    readonly brandId: number;
    readonly typeId: number;
    readonly info: string;
}
export declare class DeviceQueryParams {
    readonly limit: number;
    readonly typeId: number;
    readonly brandId: number;
    readonly page: number;
}
