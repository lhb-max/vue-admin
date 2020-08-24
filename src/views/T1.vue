<template>
    <div style="padding: 10px">
        <div style="background: #fff; border-radius: 8px; padding: 20px;">
            <div class="query-c">
                查询：
                <Input search placeholder="请输入查询内容" style="width: auto" />
            </div>
            <br>
            <Table max-height="670" border stripe :columns="columns1" :data="data1"></Table>
            <br>
            <Page :total="100" show-sizer show-elevator/>
        </div>
    </div>
</template>

<script>
export default {
    name: 't1',
    data() {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name',
                },
                {
                    title: 'Age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    key: 'address',
                },
            ],
            data1: [
                {
                    name: '张三',
                    age: 18,
                    address: '白水洞',
                    date: '2016-10-03',
                },
                {
                    name: '李四',
                    age: 30,
                    address: '黑水洞',
                    date: '2016-10-02',
                },
                {
                    name: '王五',
                    age: 20,
                    address: '蓝水洞',
                    date: '2016-10-04',
                },
                {
                    name: '赵六',
                    age: 12,
                    address: '紫水洞',
                    date: '2016-10-03',
                },
                {
                    name: '王二',
                    age: 54,
                    address: '黄水洞',
                    date: '2016-10-01',
                },
                {
                    name: '麻子',
                    age: 34,
                    address: '青水洞',
                    date: '2016-10-02',
                },
                {
                    name: '狗蛋',
                    age: 11,
                    address: '盘丝洞',
                    date: '2016-10-04',
                },
                {
                    name: '铁蛋',
                    age: 18,
                    address: '白骨洞',
                    date: '2012-11-03',
                },
            ],
        }
    },
}
</script>

<style scoped>

</style>
