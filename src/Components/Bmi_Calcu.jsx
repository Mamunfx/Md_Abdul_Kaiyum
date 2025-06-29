import { useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export const Bmi_Calcu = () => {
  const [height, setHeight] = useState(""); 
  const [weight, setWeight] = useState(""); 
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!height || !weight) {
      setBmi(null);
      setCategory("");
      setShowResult(false);
      return;
    }
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    setCategory(getBmiCategory(bmiValue));
    setShowResult(true);
  };

  const getBmiCategory = (bmiValue) => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue < 25) return "Normal";
    if (bmiValue < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="min-h-screen flex flex-col pt-16 dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16">
        <div className="w-full max-w-md mx-auto bg-white/70 dark:bg-gray-800/80 rounded-3xl shadow-2xl border border-blue-200 dark:border-gray-700 p-8 backdrop-blur-md">
          <h1 className="text-3xl font-extrabold text-center text-blue-700 dark:text-blue-300 mb-8 tracking-tight">
            BMI Calculator
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                Height
                <span className="ml-2 text-xs text-gray-500">(in centimeters)</span>
              </label>
              <input
                type="number"
                min="0"
                step="any"
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="w-full rounded-xl border-2 border-blue-300 dark:border-blue-400 bg-white dark:bg-gray-700 px-4 py-3 font-semibold text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow"
                placeholder="e.g. 170"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                Weight
                <span className="ml-2 text-xs text-gray-500">(in kilograms)</span>
              </label>
              <input
                type="number"
                min="0"
                step="any"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="w-full rounded-xl border-2 border-blue-300 dark:border-blue-400 bg-white dark:bg-gray-700 px-4 py-3 font-semibold text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow"
                placeholder="e.g. 65"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Calculate BMI
            </button>
          </form>
          {showResult && (
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/60 rounded-2xl shadow-inner text-center">
              <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                Your BMI: <span className="text-3xl">{bmi}</span>
              </div>
              <div className="mt-2 text-lg font-semibold">
                Category:{" "}
                <span
                  className={
                    category === "Normal"
                      ? "text-green-600"
                      : category === "Underweight"
                      ? "text-yellow-500"
                      : category === "Overweight"
                      ? "text-orange-500"
                      : "text-red-600"
                  }
                >
                  {category}
                </span>
              </div>
              <div className="mt-4 text-xs text-gray-600 dark:text-gray-400">
                BMI Categories: Underweight (&lt;18.5), Normal (18.5 - 24.9), Overweight (25 - 29.9), Obese (30+)
              </div>
            </div>
          )}

          {/* Additional information about BMI */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
              What is BMI?
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-bold">Body Mass Index (BMI)</span> is a number calculated from a person's weight and height. It is a simple screening tool used to categorize individuals into weight groups that may lead to health problems.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc ml-6 mb-2">
              <li>BMI does not measure body fat directly, but it correlates with more direct measures of body fat.</li>
              <li>BMI is used for adults aged 18-65. For children, teens, pregnant women, and athletes, BMI may not provide a complete health assessment.</li>
              <li>The healthy BMI range for adults is 18.5 to 24.9.</li>
            </ul>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Maintaining a healthy BMI can help reduce your risk for chronic diseases such as diabetes, heart disease, and high blood pressure.
              Always consult with a healthcare provider for a comprehensive health assessment.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};