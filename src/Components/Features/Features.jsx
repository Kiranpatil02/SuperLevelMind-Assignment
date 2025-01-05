import React from "react";
import { IoMdShare } from "react-icons/io";
import { IoMdHelp } from "react-icons/io";
import { FaChartColumn } from "react-icons/fa6";




export default function Features(){
    const features = [
        {
          icon:<IoMdShare  className="h-8 w-8 text-primary" />,

          title: "Choose the Social Media",
          description: "Select your preferred social media platform to analyze and gain insights from."
        },
        {
          icon: <IoMdHelp className="h-8 w-8 text-primary" />          ,
          title: "Ask Questions",
          description: "Inquire about specific aspects of your social media performance and engagement."
        },
        {
          icon: <FaChartColumn  className="h-8 w-8 text-primary"/>,
          title: "Get Useful Insights with AI",
          description: "Leverage AI-powered analytics to obtain valuable insights and analyze your content effectively."
        }
      ]


    return(
        <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 ">
            Powerful Features for Social Media Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {features.map((feature, index) => (
              <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 border ">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900">
                    {feature.icon}
                  </div>
                  <div className="text-xl font-semibold text-center ">
                    {feature.title}
                  </div>
                </div>
                <div>
                  <p className="text-center text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}