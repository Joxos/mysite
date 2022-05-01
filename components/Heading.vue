<script setup lang="ts">
function randomNum(minNum: number, maxNum: number) {
  switch (arguments.length) {
    case 1:
      return parseInt(String(Math.random() * minNum + 1), 10);
    case 2:
      return parseInt(
        String(Math.random() * (maxNum - minNum + 1)) + minNum,
        10
      );
    default:
      return 0;
  }
}
let sentences = [
  "国破山河在，城春草木深。",
  "醉后不知天在水，半船清梦压星河。",
  "起来了啊！把内务和卫生做好了再走！",
];
let choice = randomNum(0, sentences.length - 1);
</script>

<style scoped>
/* optimized files */
@font-face {
  font-family: "FangNoKaiTitle";
  src: url("../assets/fonts/FZKTJW.woff2");
  font-weight: normal;
  font-style: normal;
}

/* @font-face {
  font-family: "FangNoKaiTitleTTF";
  src: url("../assets/fonts/FZKTJW.ttf");
  font-weight: normal;
  font-style: normal;
} */
</style>

<template>
  <div h190 text-center flex select-none>
    <div ma>
      <div text-5xl style="font-family: 'FangNoKaiTitle'">随 记</div>
      <div text-lg m3 animate-pulse style="font-family: 'FangNoKaiTitle'">
        {{ sentences[choice] }}
      </div>
      <div m2 flex justify-center text-2xl op30 hover="op80">
        <a i-carbon-logo-github text-inherit href="https://github.com/Joxos" target="_blank" />
      </div>
    </div>
  </div>
</template>
