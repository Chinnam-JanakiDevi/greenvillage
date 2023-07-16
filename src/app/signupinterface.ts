export interface Signupinterface {
    name:string,
    email:string,
    password:string
}
export interface logins{
    email:string,
    password:string
}
export interface sellplant{
    p_id:String;
    p_image:String;
    p_name:String;
    p_type:String;
    p_cost:Number;

}
export interface interface1 {
    name:string;
    email_address:string;
    phone:number;
    message:string

}

export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
}
export interface InsertedSuccess {
    lastRowId: string;
    rowsAffected: Number;
    Message:String;
}
export interface Read {
    Result: [];
}
export interface nonfliplantsnterface{
    id:number,
    url:string,
    names:string,
    season:string
}
export interface Infointerface {
    plant_name: string;
    soil_type:string;
    ph_range:string;
    sunlight:string;
    watering:string;
    fertilizer:string;
    height:string;
    oxygen_level:string;
    img_url:string
}
