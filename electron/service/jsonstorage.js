'use strict';

const { Service } = require('ee-core');
const Storage = require('ee-core/storage');
const _ = require('lodash');
const path = require('path');

/**
 * 数据存储
 * @class
 */
class JsonstorageService extends Service {

    constructor (ctx) {
        super(ctx);

        let jsondbOptions = {
        driver: 'jsondb'
        }
        this.demoDB = Storage.connection('demo', jsondbOptions);  
        // this.demoDBKey = {
        //   test_data: 'test_data'
        // };
    }

    /*
    * 增 data
    */
    async addData(param) {
        if (!this.demoDB.db.has(param.name).value()) {
            await this.demoDB.db.defaults({[param.name]:''}).write()
        }
        const data = this.demoDB.db
        .set(param.name,param.value)
        .write();

        return data;
    }

    /*
    * 删 data
    */
    async delData(name = '') {
        const data = this.demoDB.db
        .unset(name)
        .write();
        return data;
    }

    /*
    * 改 data
    */
    async updateData(updateParam) {
        const data = this.demoDB.db
        .update(updateParam.name,e=>updateParam.value)
        .write();
        return data
    }

    /*
    * 查 data
    */                       
    async getData(param) {
        let data = this.demoDB.db
        .get(param)
        .value();
        console.log(data,_.isEmpty(data))
        return data;
    }

    /*
    * all data
    */
    async getAllData() {
        let data = this.demoDB.db
        .value();
        // if (_.isEmpty(data)) {
        //     data = []
        // }
        return data;
    }
}

JsonstorageService.toString = () => '[class JsonstorageService]';
module.exports = JsonstorageService;
