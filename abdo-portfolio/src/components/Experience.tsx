import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-text_primary mb-4">
            Backend Developer
          </h1>
          <p className="text-text_primary text-base md:text-lg font-normal mb-4">
            At TechSPace Solution
          </p>
          <p className="text-text_primary text-base md:text-lg font-normal ">
            I have been working as a Backend Developer at TechSpace Solution
            since 2024, specializing in creating scalable and efficient backend
            systems. My responsibilities include designing and maintaining
            database architectures, developing APIs, and optimizing system
            performance. I collaborate closely with cross-functional teams to
            ensure seamless integration and deliver high-quality solutions that
            enhance user experiences.
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-text_primary mb-4">
            Software Engineer
          </h1>
          <p className="text-text_primary text-xs md:text-base font-normal mb-4">
            CloudSale INC
          </p>
          <p className="text-text_primary text-xs md:text-lg font-normal">
            I worked as a Software Engineer at CloudSale INC from 2018 to 2020,
            specializing in software development with technologies like Java,
            Spring Boot, and PostgreSQL. My role included building scalable
            applications, designing robust database schemas, and developing
            APIs. I collaborated with cross-functional teams to deliver
            high-quality, efficient software solutions. Let me know if you’d
            like to highlight specific achievements or projects!
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
