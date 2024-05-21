// Function to import all images from a directory
const importAllImages = (requireContext) => {
  return requireContext.keys().reduce((images, filePath) => {
    images[filePath.replace('./', '')] = requireContext(filePath);
    return images;
  }, {});
};

// Use Webpack's require.context to dynamically require images
const imageContext = require.context('./ProjectImages', false, /\.(png|jpe?g)$/);
const images = importAllImages(imageContext);



export const Bio = {
    name: "Nidhi Yadav",
    roles: [
      "Full Stack Developer",
      "Problem Solver",
      "UI/UX Designer",
      "Programmer",
    ],
    description:
      "Crafting digital solution that inspire and inovavate",
    github: "https://github.com/Nidhi-411",
    resume:
      "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
    linkedin: "www.linkedin.com/in/nidhi-yadav-b69386247",
    leetcode : "https://leetcode.com/u/nidhi_411/",
   // twitter: ,
   // insta: 
   // facebook: 
  };

  export const AboutData = {
    description2 : "A tech enthusiast with a passion for software development ,and content creation .",
    description1 : "Candidate with a strong academic background pursuing a Bachelor of Technology in Computer Science (7.7 CGPA)",
    description3 : " I love diving into tech challanges and finding innovative solutions . "
  }
  
  export const skills = [
    {
         title:"Technical ",
         skills:[
           { 
            name : "C",
           image  :
           "data:image/png;base64,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"
           }, 
          {
                   name: "Java",
                  image:
                     "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
          },
          {
             name : "Advance DSA" , 
             image : "data:image/png;base64,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"
             },
          {
             name : "Sql",
             image : "https://icon2.cleanpng.com/20181024/ow/kisspng-logo-sail-racing-oracle-tee-grey-violet-brand-font-database-page-3-of-5-azoft-5bd0f1e6a9fc31.4645991915404200706963.jpg"
          }, 
          {
            name: "JavaScript",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
          },

          
         ]
    },

    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
        // {
        //   name: "Next Js",
        //   image:
        //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
        // },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        
        {
          name: "Tailwind CSS",
          image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIEBQYHA//EAD8QAAICAQIDBAcGBAMJAQAAAAABAgMEBREGITESIkFREzJhcZGx0RQjM0KBoVJicsEVJFMWQ1Rjc4Ky4fAH/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEEAgMFBgf/xAAzEQEAAgECBQEFBgYDAAAAAAAAAQIDBBEFEiExQVEyYYGhsRMicZHR8BQVQlLB4SND8f/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHjffVRFzushCK6uT2JiJnswtatetp2YbI4s0bH3/wA0rWvCqLl8jbGDJPhSvxLTU/q3/BYWcd6evUxsqfuUV82ZxpL+5onjOCO0TKmPH2E+X2HK+MfqT/CW9YY/zrF/bPy/V708b6ZN/eV5FXvjv8tzGdNdlXjOnn2omP37mSw+ItKzGoVZtfbfSM+6/gzXbDeveFvFr9PlnatmWjJSinFpr2Gtcid0gAAAAAAAAAAAAAAAAAAB5X210wlZdNQhFbylJ7JImImekMbWisbz0hpOtcbSblTpEVsut9i+SLmPS79bOHqeLd64Pz/RqGVk5GZb28q+y1vn33v+3gW61rXs42TJbLO97bvJEsEkISghJDGU7boC+07Vs/T2pYmROMU9vRyfai/0ML46W7wsYdXmwT9y3wbnonFtGY40Z6WPe+kvyS+n6lPJp7V6x2d/ScWx5Z5MnS3ybTFrsrZ8tiu60dkhIAAAAAAAAAAAAAAB5ZN1ePTZddNQhCPalJ+CJiN52hja0Vjmnw5dxLxDfrF7jByrw4PuVr8380vP3HSw4a443nu8trdbbUW2/pjx6sKb1ECEohCohCUQgCJSJFSCAIbJw3xNZp7hjZsnZi77KT9av/0VcuHm61dbQ8Uth2pl61+joVVsLa42VyUoSW6afUpTGz1NbRaN4VhIAAAAAAAAAAAAFL8fADn3Husu/J/wzHk/Q1NO9r80vBe5fP3F/S4o25pef4rqZvb7GvaO/wCjUvfy95bcaZV1VWXfhVWWf0QcvkJtEd5Ira3aJlVLHvrW88e6KXi6pL+xHNWfLKcd471n8peaafR7ktffsqRjKEkISiUJRCE7BARKEohEs9wzxBPSrfQXtyw5Pn51vzRoy4uaN4dLh/EZ008l+tJ+To1NsLq42VyUoSW6afUoz0euraLRvD0DIAAAAAAAAAAAGP13UI6ZpeRly23rj3F5yfKK+Jnjpz2irRqc0YcVrz4ct0zS83WcqccaDnJtu22b5Rb5vdnTvkrir1eWwYMupvPL8fRvmk8HadhRU8mLyr1+axd1P2Io5NTe/bpDu6fhmHF1tG8+9sFdNda2rhGCX8MdjRvPl0YrFe0KnCMk1KKa9qINonux2foOnahFrIxoKXhOC2kv1RsrlvXtKtm0WHNG1qtH1/hfJ0ve+hyyMZdXt3o+9FzHqIt0nu4Gs4bfB96v3q/OGBRvcueoShUQhJCJCBKCEhDN8Oa/bpNnord7MST5x8YvzRoy4uf8XS4fxG2mnlt1p9HQsPLozKVdjWRnB+KZSmOV6zFlplrzUneFyQ2gAAAAAAAAABrPFWHkaxm4ml0NxqX32RPwjHov1feLGG8Y97S5uuxX1Fq4a9I7yzWnYFGnYkMfFrUK4/F+1+bNNrTed5XMWGuKnJSF2uhi3JAAAKJxUt1JbprmmETG7ROK+GPQOedp1blW+dtK/L7UXcGfxZ53iPDeTfLi7eY/RqcefTxLMuGkISEJIQkAGMpMULrAzsrAt7eJdKt+K8H70Y2pW3duwanLp7c2Odvo2XF42tUdsvEjL+auW37Mrzp48S7WPj0/9lPyX64z0/8A0cj4GH2Flr+e6f0l4S42p37mFa159tIy+wlrnj+PxSW3Fd3wAAAAAAFHYSsc4x70tt2NzaO6pdAJAAAAACmS3TT5p9UET1aLxXwy65TzdOrbrf4lMV6vtS8i5hzR7NnneI8O5d8uKOnmP8w1PqWnBAhJAkIlJDEIEoISEJIQltLqQOwnOfSAAAAAAAAAAAAAAAABQ1v4EjVOIuE/tMp5OmKMLm95VP1Ze7yf7P2dSxi1G3Szh6/hMZN8mHpPp4n/AG0i2uzHtlTkQlXbD1oTWzRbiYns85elqTy2jaVO6DX7wI3VIhCQSBCSGO6UDu9IQdibhCxrf8sG/wD5kbxHdMUvbrSszDrxzn0cAAAG6AbgAANwAA3AAAAAAAAsNR0vD1KHYzaFPb1ZLlKPufVGVb2r2V8+lw6iNskb/VquocEXrvadkxmt/wAO/k1/3L6FmupjtaHCz8CmOuG2/unp82FyNA1fGff0+6XtrSnv8NzbGakubk0Grx98c/X6LCyq6pv01Nlf9cGvmZc0eqnal6z1rP5KFOD6Sj8Sd4a93tTjZN34ONdZ/RW38jGbV9WyuHLf2azPwlk8XhrV8npiOqP8VzUf25s1zlpC5j4XrMn9G3y/2z+n8GVQ7L1G53bf7uruxX69X+mxqtn37Otp+AY4657bz7uzZaMWnHqjVRVGuuPSMVsjTzTPd3aYseOOWtei4MWwAbgY3VtXwdLh2sy+MW13a1zlL3I2Ux3v2hXz6rFhje87fVp+dx5kTbhpuJCqO/Ky59p/Bcl8S3XSRHtORl4veemOu3vlgsjXtXypP0uo5EU/CqXo/wDx2+ZvjDjjtDnX1upv7V5+HRYW2WWtu22yzfr25OW5siIjsrza1u8/5eca64vuwSfmo7Dp+4Y9PH+V1RmZVD+4y8mrb/TtlH5bGFq1nvDOuW9PZtMfGWUxOKdaxpp/a/TQ/hvgpfutn+5rtp8crOPiWppPtc34tk0zjfGtahqNEseXT0lb7UP1XVfv7yvfS2jrV09Pxikztljl+cf6bXjX05FMbce2FlcukoPdMq2iYnaXYpet681Z3j3PTdeaIZpAAAAAABD5gRsEH6BJs2BUAAAAIbSA1PiviqOnuWJgdmzL270+qq+r9haw6fn+9bs5Wu4h9l9zH1n6Oe3W2X3SuusnZbPnKyb3bOhFYiOjz17XvO9p3UhCQgCEohiqQQkAQiV7pWp5elXO3Dscd/Wg+cZ+9Gu9IvG0t2n1OXT23xz8PEui6Br+NrFfZX3WRFbzqb/deaKGTDON6jR6/HqY27W9GZTWxqX0gAAAAAAAAAAAAAjdAa1xnr/+FYyoxZJ5ly2j4+jj4y+hYwYZvO89oc7iGs+wry19qf3u5nvvzcnJvm3J7tvzOn08PNTv5SEJRCAMUgSiEJCEkIlJCEoD0putx7oW0TcLIPeMl4MxmItG0sq3tS0WrO0w6Lw1xDXq1Spu2ry4LvR/iXmihlxTSd47PU6DX11NeW3SzYFtsaXTSAAAAADcClTg99pJ7cns+gRExPZUEgAAB4ZV9ePTZdbLswrg5SfklzJiJt0hje0VrNp8OPapn2alqN2ZbvvbJ9lfwxXRHYpSKV2h5DNmtmvOS3llNJ4T1TUYxtcVj1NcpW8m17jVfU0r07rWHh2bLG89IbFjcA4sFvfl3Tl49hKJWnWW8Qv14Pj82lXZwHg9n7rJyIPzezEau6bcHwzHS0sRqXBOdRFyxLIZMVz7PqyNtNXW3Synm4TlpH/HO7WbarKbXXdCULFycZLZliJiezk2patuW0dVKJYKiEAEkIVLoEAQrptsotjbTNwsg94yj1RjaItG0pra1bRNZ22dE4a4ir1SpUZDjXlxWzXRT9qKGXFNZ3js9Xw/iFdTHLfpZsKa8zS6iQAACN15gYTiDW6tKx2o7TyZ/h1/3fsNmPHN5c3iHEKaWnTrbxC70Wm2nTqne27prt2P2vmY26ysaSt64a8/ees/FkTFaAAADVP/ANBzJwwKNPx1KV+bZ2ezDq4rZtfq+yv1LWlpE2m09ocvimWYxxjr3tJwzwpVgxjlahCN2W+ai+ca/qyM+om/smj4dXDHNfrZtMVsuZWdRUAApfXoBitb0LF1epq2HYvXqXRXNfVG3HltSVTVaPHqK7TG0+rmmp6dkaZlyx8qHZkucX4SXmjo0vF43h5TPgvgvy2Wpk0BAkMZVLoADFKMRXCUoWRnCTjKPNST5pkTESRMxMTHdt+i8YdmKp1VN7cldBfNFXJp/NXf0nGo2iuf822YuoYeVBSoyaprbwkivNZju7lM+LJ1raJXO680Ytu8LfJzMbGi55GRXCK85ImKzPZqyZ8eKN72iGr6xxfBdqvTI9uXT0sl3V7l4m+mCfLiavjdY3pgjefXwwmiYtura1X6aUrEpektk/FI23mKU2crQ4ravVRz9fMulpbJJdEUntkgAAACwen1z1T7fcu3ZGtV1J9ILq2va/7Iy5p5eWGmcVZyfaT3hex5IxblQAAAAAY3W9Jx9XxZU3x2a5wmusH5o2Y8k0neFbVaWmopy2+E+jmGqadkaVlyxsqO0lzjJdJrzR0a3i8bw8jqMF8GTkv/AOrUloSShIQGMoVIISA2DGUruyUo8n5rkzFETtPTo9vtOSuSyb9v+rL6kcsejZ9tl/vn85US3lLtTfal5t7sfg12tNu/X8Tm3sk930Q97Hb0dE4W0mWm4Cnavv7u9P8AlXgijlvzS9pwvR/w+He3tT3Z41umAAAAAAAAAAAAAAx2s6TjavjOjJh7YzXrRfmjOmSaTvCvqdNj1FOW/wCfmHNdX0nK0jIlXlw3jv8Ad2xXdkvqdDHki8dHkdVpcmmtteOnr6rHfmbFYIYpRAkISGMpIAhCQjdJCNm48LcOShKOdnw7y51VPw9rK2bLv0h6XhfC5rMZs0dfEfq3ErPRJAAAAAAAAAAAAAAAAeGVjVZdU6ciuNlUlzjJbkxMx1hhkx1yVmto3hpmr8GWw7Vmlz7cFz9DY9mvc/qW8ep8Wef1XBbR97BPwlq2TjX4lnYyqp1S/nW2/wCviWItFusOLlxZMU7ZI2eZLUkICGKSAb26konp3X2n6Rnai19lx5ODfOcltH3+012yVqtafRZ88/8AHXp6t00PhfHwHC/I2uyPN+rH3Iq5M026Q9LoeE49PEWv1t9PwbElsuRpddIAAAAAAAAAAAAAAAAAAj3BDytorui421wnF9VJbkxMwxtSto2tG7E38KaRfv8A5X0b/wCXJx+RsjNePKjk4Vpb/wBO34LGfBGC/UycmPsTi/7Gf8TZVtwLDPa0/L9FP+w2J/xmT8I/QfxFmP8AIcP90/L9HtTwXp0Pxbci32OSXyInUXlspwPTV7zM/v3Mjh8P6ZiNSqw4Oa6Sl3n8Wa5yWnyuYuH6bFO9adWSjDsx2SS28DBciIjsqXTmEpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z",
        },
        // {
        //   name: "Material UI",
        //   image:
        //     "data:image/png;base64,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",
        // },
        // {
        //   name: "Flutter",
        //   image:
        //     "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
        // },
      ],
    },
    // {
    //   title: "Backend",
    //   skills: [
    //     {
    //       name: "Node Js",
    //       image: "https://nodejs.org/static/images/logo.svg",
    //     },
    //     {
    //       name: "Express Js",
    //       image:
    //         "data:image/png;base64,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",
    //     },
    //     {
    //       name: "Graph Ql",
    //       image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    //     },
    //     {
    //       name: "Python",
    //       image:
    //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    //     },
    //     {
    //       name: "MySQL",
    //       image:
    //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    //     },
    //     {
    //       name: "Postgresql",
    //       image: "https://www.postgresql.org/media/img/about/press/elephant.png",
    //     },
    //     {
    //       name: "MongoDB",
    //       image:
    //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    //     },
    //     {
    //       name: "Firebase",
    //       image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    //     },
    //   ],
    // },
    // {
    //   title: "Android",
    //   skills: [
    //     {
    //       name: "Java",
    //       image:
    //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    //     },
    //     {
    //       name: "Kotlin",
    //       image:
    //         "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
    //     },
    //     {
    //       name: "XML",
    //       image:
    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
    //     },
    //     {
    //       name: "Android Studio",
    //       image:
    //         "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
    //     },
    //   ],
    // },
  
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        // {
        //   name: "Docker",
        //   image:
        //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
        // },
        // {
        //   name: "Netlify",
        //   image:
        //     "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
        // },
        {
           name : "vercel",
           image : "data:image/png;base64,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",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        // {
        //   name: "Postman",
        //   image:
        //     "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
        // },
        // {
        //   name: "Adobe XD",
        //   image:
        //     "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
        // },
        // {
        //   name: "Figma",
        //   image:
        //     "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
        // },
             {
                 name: "Firebase",
                image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
              },

      ],
    },

  ];
  
  export const projectsData = [
    { id : '1' , 
      title: 'VidioVault',
      description: 'vidio streaming platform , made with React js , Redux js , Tailwind Css . ',
      image: images['vidioValtProject1.png'], // Add image link here
      codeLink: 'https://github.com/Nidhi-411/vidio-vault',
      demoLink: 'https://github.com/Nidhi-411/vidio-vault',
    },
    {
      title: 'CraveCart',
      description: 'food web app that provide features of seeing the restaurants and thire menu , add and remove item from cart , authentication provided with firebase.',
      image: images['CraveCartProject.png'], // Add image link here
      codeLink: 'https://github.com/Nidhi-411/CraveCart',
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7196120338538151936/',
    },
    {
      title: 'Snake-s-world',
      description: 'A intrsting game build with html , css , vanilla  javaScript.',
     // image: 'https://www.eventpro.net/images/venn3.png',
      image: images['snakeProject.png'], // Add image link here
      codeLink: 'https://github.com/Nidhi-411/snake_world',
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7193514609931173888/',
    },
    {
      title: 'Js_Projects',
      description: 'Multiple javasript projects , including color changer , Bmi generator , Digital clock , Guess the number , unlimited color , keybord check' ,
      image: images['jsProjects.png'],
      
      codeLink: 'https://github.com/yourprofile/project4',
      demoLink: 'https://nidhi-411.github.io/js-Projects/',
    },
    {
      title: 'EventPro',
      description: 'Made with Html , Css , JavaSritp . provides the features of event organization',
      image: images['EventProImage.png'], // Add image link here
      codeLink: 'https://github.com/yourprofile/project5',
      demoLink: 'https://yourprofile.github.io/project5',
    },
  ];
  
  
  
  export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
  ];
  