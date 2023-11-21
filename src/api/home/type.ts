// 定义首页模块TS数据类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

// 代表已有的医院数据的TS类型
export interface Hospital {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    hostypeString: string;
    fullAddress: string;
  };
  hoscode: string;
  hosname: string;
  hostype: string;
  provinceCode: string;
  cityCode: string;
  districtCode: string;
  address: string;
  logoData: string;
  intro: string;
  route: string;
  status: number;
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
  };
}

//储存全部已有的医院的数组类型
export type Content = Hospital[];

//获取已有医院接口返回的数据TS类型
export interface HospitalResponseData extends ResponseData {
  data: {
    content: Content;
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      };
      pageNumber: number;
      pageSize: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
  };
}

// 代表着医院的等级或者地区的数据的ts类型
export interface HospitalLevelAndRegion {
  createTime: string;
  dictCode: string;
  hasChildren: boolean;
  id: number;
  isDeleted:number;
  name: string;
  param: {};
  parentId: 0;
  updateTime: number;
  value: string;
}

export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];

// 获取等级或医院地区接口返回数据类型
export interface HospitalLevelAndRegionResponseData extends ResponseData{
  data:HospitalLevelAndRegionArr
}

