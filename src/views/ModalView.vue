<template>
    <div class="modal" v-if="showModal">
      <!-- Modal content here -->
      <div class="modal-content">
        <!-- Your modal content goes here -->
        <p>This is your modal content.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: true, // Initially, set this to true to show the modal
      };
    },
    mounted() {
      // Automatically hide the modal after a certain duration (e.g., 5 seconds)
      setTimeout(() => {
        this.showModal = false;
      }, 5000); // 5000 milliseconds = 5 seconds
    },
  };
  </script>
  
  <style>
  /* Add your modal styles here */
  .modal {
    /* Modal styles */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    /* Modal content styles */
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  