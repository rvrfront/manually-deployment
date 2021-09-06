export interface ITitle{
    red: number;
    green: number;
    blue: number;
};

export interface IHistory{
    collection: ITitle[];
    
};

export interface IContext{
    red: number;
    green: number;
    blue: number;
    setRed: (val: number)=>void;
    setGreen: (val: number)=>void;
    setBlue: (val: number)=>void;
};
