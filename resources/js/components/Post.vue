<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              placeholder="title"
              :class="['form-control my-2', errors.title ? 'is-invalid' : '']"
              v-model="post.title"
              name=""
              id=""
            />
            <span class="text-danger" v-if="errors.title">{{
              errors.title[0]
            }}</span>
            <textarea
              name=""
              placeholder="body"
              id=""
              :class="['form-control my-2', errors.body ? 'is-invalid' : '']"
              v-model="post.body"
            ></textarea>
            <span class="text-danger" v-if="errors.body">{{
              errors.body[0]
            }}</span>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="createPost"
            >
              create post
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-success btn-sm float-right"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      New Post
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
      },
      errors: [],
    };
  },
  methods: {
    createPost() {
      axios.post("api/createpost", this.post).then((response) => {
        if (response.data.status == "error") {
          this.errors = response.data.errors;
        } else if (response.data.status == "success") {
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
        }
      });
    },
  },
};
</script>