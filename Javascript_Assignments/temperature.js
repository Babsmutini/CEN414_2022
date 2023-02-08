const convertTemperatureScale = (type, value) => {
   if (type == "F_C") {
      var answer = (value - 32) / 1.8;
      return answer;
   }
   if (type == "C_F") {
      var answer = 1.8 * value + 32;
      return answer;
   }
   if (type == "C_K") {
      var answer = 273 + value;
      return answer;
   }
   if (type == "K_C") {
      var answer = value - 273;
      return answer;
   }
   if (type == "F_K") {
      var answer = 1.8 * value + 32 + 273;
      return answer;
   }
   if (type == "K_F") {
      var answer = (value - 273) * 1.8 + 32;
      return answer;
   }
};

console.log(convertTemperatureScale("F_C", 300));
