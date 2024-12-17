<script setup>
import { ref, onMounted } from 'vue';
import { Refresh, CopyDocument } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';


const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  getContentFn: {
    type: Function,
    default: () => {
      return '';
    }
  }
});


// 复制到剪切板
const copyToClipboard = (text) => {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);

  ElNotification({
    title: '提示',
    message: '复制成功',
    type: 'success'
  });
};

const content = ref('');

const refresh = () => {
  content.value = props.getContentFn();
};

onMounted(() => {
  refresh();
});
</script>

<template>
  <div class="theme-card">
    <div class="theme-card__head">
      <div class="theme-card__head__title">
        {{ title }}
      </div>
      <div class="theme-card__head__actions">
        <el-button :icon="Refresh" circle @click="refresh()" />
        <el-button :icon="CopyDocument" circle @click="copyToClipboard(content)" />
      </div>
    </div>

    <div class="theme-card__content">
      {{ content }}
    </div>
  </div>
</template>

<style scoped>
.theme-card {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  padding: 10px;
  color: #303133;
  border: 1px solid transparent;
  transition: all 0.3s;
}

.theme-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-color: #e4e7ed;
}

.theme-card__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.theme-card__content {
  height: 100px;
  background-color: #f5f5f6;
  border-radius: 6px;
  overflow: auto;
  padding: 6px;
}

.theme-card__head__title {
  font-size: 14px;
  font-weight: bold;
  color: #606266;
}

.theme-card__head__actions {
  opacity: 0;
  transition: all 0.3s;
}

.theme-card:hover .theme-card__head__actions {
  opacity: 1;
}
</style>