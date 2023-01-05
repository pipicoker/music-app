import React from 'react'

import top1 from "../assets/top1.png"
import top2 from "../assets/top2.png"
import top3 from "../assets/top3.png"
import love2 from "../assets/love2.png"


const Topdata = [
    {
        id: "one",
        pix: top1,
        title: "Golden age of 80s",
        artiste: "Sean swadder",
        duration: "2:34:45",
        loveButton: {love2}
    },
    {
        id: "two",
        pix: top2,
        title: "Reggae n blues",
        artiste: "Dj YK mule",
        duration: "1:02:42",
        like: function () {
            console.log(this.id);
        }
    },
    {
        id: "three",
        pix: top3,
        title: "Tomorrow's tunes",
        artiste: "Obi Datti",
        duration: "2:01:25",
        like: function () {
            console.log(this.id);
        }
    }
]

export default Topdata