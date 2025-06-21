export const homePageMetaData = {
  title: "Md Asif Nawaz ",
  description: "Explore the personal portfolio of Md Asif Nawaz, a passionate Full Stack Developer specializing in modern web technologies and scalable applications",
  authors: [{ name: "Md Asif Nawaz" }],
  keywords: [
    "Md Asif Nawaz",
    "Full Stack Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "React",
    "Frontend Developer",
    "Backend Developer"
  ],
  // The below metadata is used to give the below stated information when we try to send the link of our website in the social media platform  like facebook,instagram and linkedin.
  openGraph: {
    title: "Md Asif Nawaz | Full Stack Developer",
    description:
      "Showcasing the work and projects of Md Asif Nawaz, a skilled Full Stack Developer.",
    url: "https://mdasifnawaz-portfolio.vercel.app/",
    siteName: "Md Asif Nawaz Portfolio",
    images: [
      {
        url: "/og-image.png", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Md Asif Nawaz Portfolio"
      }
    ],
    type: "website"
  },
  // It is a special way of giving the same info as above for sharing the website link in twitter.
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    images: ""
  },
  creator: "Md Asif Nawaz",
  publisher: "Md Asif Nawaz",
  metadataBase: new URL("https://mdasifnawaz-portfolio.vercel.app/")
  // It is the base url of metadata used to resolve the realtive path of the url mentioned in the metadat.
}
 //End of all the metadata
