<script setup>
import { ref } from 'vue';
import Mock from 'mockjs';


const list = ref([
  {
    title: '人物',
    children: [
      {
        title: '姓',
        getContentFn: () => {
          return Mock.Random.clast();
        }
      },
      {
        title: '名',
        getContentFn: () => {
          return Mock.Random.cfirst();
        }
      },
      {
        title: '姓名',
        getContentFn: () => {
          return Mock.Random.cname();
        }
      },
      {
        title: '身份证',
        getContentFn: () => {
          return Mock.Random.id();
        }
      }
    ]
  },
  {
    title: '文本',
    children: [
      {
        title: '标题',
        getContentFn: () => {
          return Mock.Random.ctitle(10, 30);
        }
      },
      {
        title: '长文本',
        getContentFn: () => {
          return Mock.Random.csentence(300, 800);
        }
      }
    ]
  },
  {
    title: '地址',
    children: [
      {
        title: '省',
        getContentFn: () => {
          return Mock.Random.province();
        }
      },
      {
        title: '市',
        getContentFn: () => {
          return Mock.Random.city();
        }
      },
      {
        title: '区',
        getContentFn: () => {
          return Mock.Random.county();
        }
      },
      {
        title: '省市区',
        getContentFn: () => {
          return Mock.Random.county(true);
        }
      },
      {
        title: '邮政编码',
        getContentFn: () => {
          return Mock.Random.zip();
        }
      }
    ]
  },
  {
    title: '日期',
    children: [
      {
        title: '日期',
        getContentFn: () => {
          return Mock.Random.date();
        }
      },
      {
        title: '时间',
        getContentFn: () => {
          return Mock.Random.time();
        }
      },
      {
        title: '日期时间',
        getContentFn: () => {
          return Mock.Random.datetime();
        }
      },
      {
        title: '当前日期时间',
        getContentFn: () => {
          return Mock.Random.now();
        }
      }
    ]
  },
  {
    title: '图片',
    children: [
      {
        title: '1x1',
        getContentFn: () => {
          return Mock.Random.image('200x200');
        }
      },
      {
        title: '9x16',
        getContentFn: () => {
          return Mock.Random.image('450x800');
        }
      },
      {
        title: '16x9',
        getContentFn: () => {
          return Mock.Random.image('800x450');
        }
      }
    ]
  },
  {
    title: '颜色',
    children: [
      {
        title: 'hex',
        getContentFn: () => {
          return Mock.Random.hex();
        }
      },
      {
        title: 'rgb',
        getContentFn: () => {
          return Mock.Random.rgb();
        }
      },
      {
        title: 'rgba',
        getContentFn: () => {
          return Mock.Random.rgba();
        }
      },
      {
        title: 'hsl',
        getContentFn: () => {
          return Mock.Random.hsl();
        }
      }
    ]
  },
  {
    title: '网页',
    children: [
      {
        title: '域名http',
        getContentFn: () => {
          return Mock.Random.url('http');
        }
      },
      {
        title: '域名https',
        getContentFn: () => {
          return Mock.Random.url('https');
        }
      },
      {
        title: '邮件地址',
        getContentFn: () => {
          return Mock.Random.email();
        }
      },
      {
        title: 'IP地址',
        getContentFn: () => {
          return Mock.Random.ip();
        }
      }
    ]
  }
]);

</script>

<template>
  <div class="page">
    <div v-for="item in list" :key="item.title">
      <div class="page__title">{{ item.title }}</div>
      <el-row :gutter="0">
        <el-col :lg="4" :md="6" :sm="12" :xs="24" class="mb-2" v-for="item2 in item.children" :key="item2.title">
          <ThemeCard :title="item2.title" :getContentFn="item2.getContentFn"></ThemeCard>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: white;
  padding: 10px;
}

.page__title {
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
  color: #606266;
  margin-top: 16px;
}
</style>
