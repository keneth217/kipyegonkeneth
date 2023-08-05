<template>
  <v-container fluid class="text-end hist">
    <v-row>
      <v-col fluid lg="12" class="history">
        <div>
          <h6>education & experience</h6>
        </div>
      </v-col>
      <v-col lg="8">
        <v-timeline align="start">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card >
              <v-card-title :class="['text-h6', `bg-${item.color}`]">
               {{ item.title }}
              </v-card-title>
              <v-card-text class="bg-white text--primary">
                <p>
               {{ item.desc}}
                </p>
                <p :color="item.color"  :dot-color="item.color"> {{ item.period }} </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "primary level of education",
        color: "red-lighten-2",
        icon: "mdi-star",
        desc: "Awarded  kenya certificate of primary education ",
        period:"january,2005 to December 2013"
      },
      {
        title: "secondary level of education",
        color: "purple-lighten-2",
        icon: "mdi-book-variant",
        desc:"Awarded kenya certificate of secondary education education",
        period:"February,2014 to December 2017"
      },
      {
        title: "tertiary level of education",
        color: "green-lighten-1",
        icon: "mdi-layers-triple",
        desc:"Arwaded Degree in Software Engineering",
        period:"september,2018 to July 2023"
      },
      {
        title: "industrial attachment",
        color: "indigo-lighten-2",
        icon: "mdi-airballoon",
        desc:"industrial attachment at samis software company",
        period:"july,2022 to December 2022"
      },
      {
        title: "Internship",
        color: "indigo-lighten-2",
        icon: "mdi-layers-triple",
        desc:"  samis software company",
        period:"january,2023 to Date"
      },
    ],
  }),
};
</script>
<style>
.history {
  background-image: url(./../assets/contact.svg);
  width: 100%;
  height: 200px;
  display: block;
  text-align: center;
  color: #f7f5f5;
  background-size: cover;
  font-display: block;
  box-shadow: 5px;
  font-size: 50px;
  border-left: 1px solid #b0aaaa;
  top: 0;
  text-transform: uppercase;
}
.hist{
  background-color: #b0aaaa;
}
</style>
