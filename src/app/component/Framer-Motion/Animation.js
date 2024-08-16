export const fadeInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  }
  
  export const fadeInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  }
  
  export const fadeInUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  }
  
  export const fadeInDown = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  }
  
  export const fadeInUpSmall = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  }
  
  export const fadeInUpBig = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  }
  
  export const fadeInLeftSmall = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  }
  
  export const fadeInRightSmall = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  }
  
  export const fadeInLeftBig = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  }
  
  export const fadeInRightBig = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  }
  
  export const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  
  export const staggerFast = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }
  
  export const staggerSlow = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  
  // export const topBar = {
  //   open:{
  //     y:10,
  //     rotate:45,
  //     transition:{
  //       y:{duration: 0.4},
  //       rotate:{delay: 0.4},
  //       duration:0.4

  //     }
  //   },
  //   close:{
  //     y:0,
  //     rotate:0,
  //     transition:{
       
  //       rotate:{duration: 0.2},
  //       y:{delay: 0.2},
  //       duration:0.6

  //     }
  //   }
  // }
  // export const middleBar = {
  //   open:{
  //     opacity:0,
  //     rotate:-45,
  //     transition:{
  //      delay: 0.4,
  //       duration:0

  //     }
  //   },
  //   close:{
  //     opacity:1,
  //     transition:{
       
  //       delay: 0.2,
  //     }
   
  //   }
  // }
  // export const bottomBar = {
  //   open:{
  //     y:10,
  //     rotate:-45,
  //     transition:{
  //       y:{duration: 0.4},
  //       rotate:{delay: 0.4},
  //       duration:0.4

  //     }
  //   },
  //   close:{
  //     y:0,
  //     rotate:40,
  //     transition:{
       
  //       rotate:{duration: 0.2},
  //       y:{delay: 0.2},
  //       duration:0.6

  //     }
  //   }
  // }