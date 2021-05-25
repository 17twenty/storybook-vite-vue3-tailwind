<template>
  <div className="max-w-xl h-screen mx-auto container flex flex-col items-center justify-center">
    <div className=" flex flex-col bg-red-400 px-4 py-4 rounded-lg shadow-xl">
      <div className="text-3xl text-white  font-heading">Amount to be paid</div>
      <div className="text-lg text-white font-medium">$362.50</div>
      <div className="text-lg text-white font-medium">To <span class="font-bold">CompanyName</span></div>
      <div className="text-lg text-white font-medium underline">View Details</div>
      <div className="text-lg text-white font-medium">Details</div>
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
