<template>
  <div class="container">
    <div class="row">
      <h1>File a Complaint</h1>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <hr>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <form>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                <div class="form-group">
                  <label for="email">Mail</label>
                  <input v-model="userData.email" type="text" id="email" class="form-control">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input v-model="userData.password" type="password" id="password" class="form-control">
                </div>
                <div class="form-group">
                  <label for="age">Age</label>
                  <input v-model="userData.age" type="number" id="age" class="form-control">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                <label for="message">Message</label>
                <textarea v-model="message" id="message" cols="30" rows="5" class="form-control"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                <div class="form-group">
                  <label for="sendmail">
                    <input v-model="sendMail" type="checkbox" id="sendmail" value="SendMail">  Send Mail
                  </label>
                  <label for="sendInfoMail">
                    <input v-model="sendMail" type="checkbox" id="sendInfoMail" value="sendInfoMail">  Send InfoMail
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                <div class="form-group">
                  <label for="male">
                    <input v-model="gender" type="radio" id="male" value="Male">  Male
                  </label>
                  <label for="female">
                    <input v-model="gender" type="radio" id="female" value="Female">  Female
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                  <label for="priority">Priority</label>
                  <select v-model="selectedPriority" id="priority" class="form-control">
                    <option disabled value="">Please select one</option>
                    <option v-for="priority in priorities" :key="priority" :value="priority">{{ priority }}</option>
                  </select>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                <app-switch v-model="dataSwitch"></app-switch>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                <div class="form-group">
                  <button @click.prevent="submitted" class="btn btn-primary">Submit !</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div v-if="isSubmitted" class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4>Your Data</h4>
                </div>
                <div class="panel-body">
                  <p>Mail: {{userData.email}}</p>
                  <p>Password: {{userData.password}}</p>
                  <p>Age: {{userData.age}}</p>
                  <p style="white-space: pre-line;">Message: <br> {{message}}</p>
                  <p><strong>Send Mail?</strong></p>
                  <ul>
                    <li v-for="item in sendMail" :key="item">{{ item }}</li>
                  </ul>
                  <p>Gender: {{ gender }}</p>
                  <p>Priority: {{ selectedPriority }}</p>
                  <p>Switched: {{ dataSwitch }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Switch from './Switch';

  export default {
    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: 27,
        },
        message: 'To to est dnas la scepa',
        sendMail: [],
        sendInfoMail: true,
        gender: 'Male',
        priorities: ['Low', 'Normal', 'High'],
        selectedPriority: 'Normal',
        dataSwitch: true,
        isSubmitted: false,
      };
    },
    methods: {
      submitted() {
        this.isSubmitted = true;
      },
    },
    components: {
      appSwitch: Switch,
    },
  };
</script>
