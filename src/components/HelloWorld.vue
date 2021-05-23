<template>
  <div className="w-full h-screen mx-auto container flex flex-col items-center justify-center">
    <div className=" flex flex-col bg-blue-400 px-16 py-12 rounded-lg shadow-xl">
      <div className="text-2xl text-white font-extrabold ">Vue + Tailwind + Storybook</div>
      <div className="text-lg text-white font-medium">Heaps awesome frontend development!</div>
    </div>
  </div>
</template>

<script>
import '@/index.css';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
  },
};
</script>
