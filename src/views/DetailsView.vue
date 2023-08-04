<template>
  <v-container fluid class="mt-0 details">
    <v-row class="d-flex">
        <v-col lg="12">
            <v-avatar>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                  size="x-large"
                ></v-img>
              </v-avatar>
        </v-col>
      <v-col lg="4">

            <v-container>
              <v-row justify="space-around">
                <v-card width="400">
                  <v-img
                    height="200"
                    src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                    cover
                    class="text-white"
                  >
                    <v-toolbar
                      color="rgba(0, 0, 0, 0)"
                      theme="dark"
                    >
                      <template v-slot:prepend>
                        <v-btn icon="$menu"></v-btn>
                      </template>
          
                      <v-toolbar-title class="text-h6">
                        Messages
                      </v-toolbar-title>
          
                      <template v-slot:append>
                        <v-btn icon="mdi-dots-vertical"></v-btn>
                      </template>
                    </v-toolbar>
                  </v-img>
          
                  <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">
                      Today
                    </div>
          
                    <v-timeline density="compact" align="start">
                      <v-timeline-item
                        v-for="message in messages"
                        :key="message.time"
                        :dot-color="message.color"
                        size="x-small"
                      >
                        <div class="mb-4">
                          <div class="font-weight-normal">
                            <strong>{{ message.from }}</strong> @{{ message.time }}
                          </div>
                          <div>{{ message.message }}</div>
                        </div>
                      </v-timeline-item>
                    </v-timeline>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-container>
 
         
      </v-col>
      <v-col lg="6">
        <v-divider></v-divider>
       
            <v-timeline side="end" align="start">
              <v-timeline-item
                dot-color="pink"
                size="small"
              >
                <div class="d-flex">
                  <strong class="me-4">5pm</strong>
                  <div>
                    <strong>New Icon</strong>
                    <div class="text-caption">
                      Mobile App
                    </div>
                  </div>
                </div>
              </v-timeline-item>
          
              <v-timeline-item
                dot-color="teal-lighten-3"
                size="small"
              >
                <div class="d-flex">
                  <strong class="me-4">3-4pm</strong>
                  <div>
                    <strong>Design Stand Up</strong>
                    <div class="text-caption mb-2">
                      Hangouts
                    </div>
                  </div>
                </div>
              </v-timeline-item>
          
              <v-timeline-item
                dot-color="pink"
                size="small"
              >
                <div class="d-flex">
                  <strong class="me-4">12pm</strong>
                  <div>
                    <strong>Lunch break</strong>
                  </div>
                </div>
              </v-timeline-item>
          
              <v-timeline-item
                dot-color="teal-lighten-3"
                size="small"
              >
                <div class="d-flex">
                  <strong class="me-4">9-11am</strong>
                  <div>
                    <strong>Finish Home Screen</strong>
                    <div class="text-caption">
                      Web App
                    </div>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
       
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    tab: null,
 
    messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple-lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple-lighten-1',
        },
      ],
  }),
};
</script>
<style scoped>
.details{
    background-color: rgb(150, 141, 158);
}
</style>