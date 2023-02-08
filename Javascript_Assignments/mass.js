Using JavaScript, write a (only one) function convertMassScale 0 with two arguments (type, value) that converts from (type 1: Kilogram to Pound, type 2:
	Pound to Kilogram, type 3: Ounce to Kilogram, type 4: Kilogram to Ounce, type 5:
	Pound to Ounce, type 6: Ounce to Pound).
	(Hint 1 Pound= 0.45359237 Kg; 1 Pound = 16 Ounces)

	const convertMassScale = (type, value) => {
		if (type == 1) {
		   return value / 0.45359237;
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
	 