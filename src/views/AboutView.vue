<template>

    <v-container fluid class="mt-0 text-center background">
      <v-row>
        <v-col lg="12">
      <div class="text-center ">
        <h6 class="title justify-center">My Story</h6>
      </div>
    </v-col>
        <v-col lg="12">
          <div class="text-center story">
            <h5 class="justify-center ">
              It all started with playing computer games ,the rest is an
              absolute love of code. ever since writing my first program and
              manipulating it to produce desired output; i still remember my
              first time sitting infront of a computer,programming it to print
              <span class="hello">"Hello World....! ! !"</span> ,guess what it
              was like magic to me,since then its been a strong desire to learn
              coding.I then fall in love with the process again and again
              ,creating beautiful softwares to solve daily problems. There's
              certainly yet more to learn,yet more problems to solve,and yet
              more to build. And for this , i am greatful.If coding is a crime
              then i plead guilty. I am eargerly grabbing to any other
              programming language,frameworks or principles to solving modern
              problems workable solutions. I am just scratching the surface ,I
              still got a long way to go,to get to where i want to be, Will you
              help me get there?.
            </h5>
            <p class="story2">
              Never give up,Believe in your self,Work smart,Its never too late
              !!!!!
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

</template>
<style scoped>
.background{
  background-size: cover; 
  background-image: url(./../assets/strait.svg);
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  top: 0;
}
.title {
  margin-top: 20px;
  font-size: 30px;
  color: #a31181;
  box-shadow: 5px ;
  font-family: "Times New Roman", Times, serif;
}
.story {
  position: absolute;
  top: 30%;
  left: 50%;
  bottom: 90%;
  transform: translate(-50%, -50%);
  margin-bottom: 20px;
  text-align: center;
  color: hsl(0, 16%, 94%);
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
}
.story2 {
  margin-bottom: 10px;
  font-size: 20px;
  font-family: cursive;
  font-style: bold;
  color: hwb(108 91% 7%);
  text-shadow: 5px ;
}
.hello {
  font-family: cursive;
  font-style: bold;
  color: red;
  font-size: 20px;
  text-decoration: wavy;
}
</style>
