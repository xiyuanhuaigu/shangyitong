// 统一管理首页模块的接口
import request from "@/utils/request";
import type {HospitalResponseData,HospitalLevelAndRegionResponseData} from './type'

// 通过枚举去管理所有的接口
enum API {
    // 获取已有的医院的数据接口地址
    HOSPITAL_URL = "/hosp/hospital/" ,
    // 获取医院的等级与地区接口
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/'
}
// 获取医院的数据
export const reqHospital = (page:number, limit:number) => request.get<any,HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit} `)
// 获取医院的等级或者获取医院的地区的数据 
export const reqHospitalLevelAndRegion = (dictCode:string) => request.get<any,HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dictCode)






 