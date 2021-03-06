const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            interval: '600s', // 1 分钟间隔
            type: 'all', // 指定所有的 worker 都需要执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        // const res = await this.ctx.curl('https://hapi-pre.00bang.cn/column/getColumnByPosition?position=0', {
        //     dataType: 'json',
        // });

        // this.ctx.logger.info([`定时任务触发-${+new Date()}：`, res.data])

        let timeStr = new Date();
        console.log([`定时任务触发-${+timeStr}`])
        this.ctx.app.cache = +timeStr;
    }
}

module.exports = UpdateCache;