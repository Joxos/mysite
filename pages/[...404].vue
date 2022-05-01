<template>
    <title>Oops!</title>
    <div text-center flex h190 select-none>
        <div ma>
            <div text-8xl>404</div>
            <div text-3xl m3>这里什么也没有: {{ $route.path }}</div>
            <a text-2xl href="/">回到主页？</a>
        </div>
    </div>
</template>