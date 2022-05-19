<!--  -->
<template>
  <div class='main-class'>
    <div class="header-class">
      <div class="left-class">
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
      </div>
      <div class="right-class">
        <el-input v-model="search" style="width:350px" placeholder="请输入关键字搜索"></el-input>
        <el-button type="primary" style="margin-left:10px">确定</el-button>
      </div>
    </div>
    <div class="my-table-class">
      <el-table
        :data="tableData"
        >
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" style="margin-right:10px" size="small" >编辑</el-button>
            <el-popconfirm
              title="确定删除吗？"
            >
              <el-button type="danger" size="small" slot="reference">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer-class">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <el-dialog
      title="新增用户"
      :visible.sync="addDialogVisible"
      width="30%"
      :before-close="cancel">
        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" >
            <el-input  v-model="ruleForm.userId" ></el-input>
          </el-form-item>
          <el-form-item label="姓名" >
            <el-input  v-model="ruleForm.nickname" ></el-input>
          </el-form-item>
          <el-form-item label="年龄" >
            <el-input  v-model.number="ruleForm.age" ></el-input>
          </el-form-item>
          <el-form-item label="性别" >
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="地址" >
            <el-input  v-model="ruleForm.address" ></el-input>
          </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirmAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getData } from '../utils/http'
export default {
  components: {},
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: '',
      currentPage: 1,
      addDialogVisible: false,
      ruleForm: {
        userId: '',
        nickname: '',
        age: '',
        sex: 1,
        address: ''
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    add () {
      this.addDialogVisible = true
      this.ruleForm = {}
    },
    handleClick (row) {
      console.log('row = ' + JSON.stringify(row))
    },
    handleSizeChange () {

    },
    handleCurrentChange () {

    },
    confirmAdd () {
      // console.log('form = ' + JSON.stringify(this.ruleForm))

      getData({name: 'name'}).then(
        res => {
          console.log('res = ' + JSON.stringify(res))
          // console.log('res.date = ', res.data.date)
          console.log('typeof(data) = ', typeof(res.data))
          var formData = JSON.stringify(res.data)
          console.log('typeof(formData) = '+ typeof(res.formData))
          console.log('(formData) = ' + formData)

        }
      )      
      this.addDialogVisible = false
    },
    cancel () {

    }
  },
  created () {

  },
  mounted () {

  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {}
}
</script>
<style scoped>
.main-class {
  width: 100%;
  padding: 10px;
}

.header-class {
  display: flex;
  flex-direction: row;
}

.left-class {
  margin:10px 0;
  margin-right: 25%;
}

.right-class {
  width: 50%;
  white-space: nowrap;
  margin: 10px 0;
}
.my-table-class {
  margin-top: 10px;
  width: 100%;
}

.footer-class {
  margin:10px;
  float: right;
}
</style>
