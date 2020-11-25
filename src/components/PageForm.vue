<template>
  <div class="layoutForm">
    <p v-html="$t('Pages.Form.title')" />
    <form @submit.prevent="formSubmit">
      <div class="formItem">
        <label for="title">
          {{ $t('Pages.Form.Labels.title') }}
        </label>
        <input
            id="title"
            :class="$v.form.title.$error ? 'error' : ''"
            v-model.trim="form.title"
        >
        <p v-if="$v.form.title.$dirty && !$v.form.title.required" class="error">
          {{ $t('Pages.Form.Errors.require') }}
        </p>
        <p v-if="$v.form.title.$dirty && !$v.form.title.minLength" class="error">
          {{ $t('Pages.Form.Errors.minLength') }}
        </p>
      </div>
      <div class="formItem">
        <label for="text">
          {{ $t('Pages.Form.Labels.text') }}
        </label>
        <input
            id="text"
            :class="$v.form.text.$error ? 'error' : ''"
            v-model.trim="form.text"
        >
        <p v-if="$v.form.text.$dirty && !$v.form.text.required" class="error">
          {{ $t('Pages.Form.Errors.require') }}
        </p>
        <p v-if="$v.form.text.$dirty && !$v.form.text.minLength" class="error">
          {{ $t('Pages.Form.Errors.minLength') }}
        </p>
      </div>
      <div class="formItem">
        <label for="mail">
          {{ $t('Pages.Form.Labels.mail') }}
        </label>
        <input
            id="mail"
            :class="$v.form.mail.$error ? 'error' : ''"
            v-model.trim="form.mail"
        >
        <p v-if="$v.form.mail.$dirty && !$v.form.mail.required" class="error">
          {{ $t('Pages.Form.Errors.require') }}
        </p>
        <p v-if="$v.form.mail.$dirty && !$v.form.mail.email" class="error">
          {{ $t('Pages.Form.Errors.mail') }}
        </p>
      </div>
      <div class="formItem">
        <label for="choose">
          {{ $t('Pages.Form.Labels.choose') }}
        </label>
        <select id="choose" v-model="form.choose">
          <option
              v-for="(choose, index) in chooses"
              :value="choose"
              :key="index"
          >
            {{ $t(`Pages.Form.Chooses.${choose}`)}}
          </option>
        </select>
      </div>
      <div class="formItem">
        <label for="multiChoose">
          {{ $t('Pages.Form.Labels.multiChoose') }}
        </label>
        <select id="multiChoose" v-model="form.multiChoose" multiple>
          <option
              v-for="(choose, index) in multiChooses"
              :value="choose"
              :key="index"
          >
            {{ $t(`Pages.Form.MultiChooses.${choose}`) }}
          </option>
        </select>
      </div>
      <div class="formItem">
        <input
            type="checkbox"
            id="checkbox"
            v-model="form.diode"
        >
        <label for="checkbox">
          {{ $t('Pages.Form.Labels.checkbox') }}
        </label>
      </div>
      <label for="formRow" v-if="form.diode">
        {{ $t('Pages.Form.Labels.radio') }}
      </label>
      <div id="formRow" v-if="form.diode">
        <div class="formItem inline" >
          <label for="green">
            {{ $t('Pages.Form.Labels.RadioColor.green') }}
          </label>
          <input
              type="radio"
              id="green"
              class="radio"
              value="green"
              v-model="form.diodeColor"
          >
        </div>
        <div class="formItem inline">
          <label for="red">
            {{ $t('Pages.Form.Labels.RadioColor.red') }}
          </label>
          <input
              type="radio"
              id="red"
              class="radio"
              value="red"
              v-model="form.diodeColor"
          >
        </div>
      </div>
      <button type="submit">
        {{ $t('Pages.Form.submit')}}
      </button>
      <Loader v-if="isLoading"/>
      <p class="submitSuccess" v-if="isUploadSuccess === 'yes'">
        {{ $t('Pages.Form.submitSuccess')}}
      </p>
      <p class="submitFail" v-if="isUploadSuccess === 'no'">
        {{ $t('Pages.Form.submitFail')}}
      </p>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import Loader from "@/components/Loader";

export default {
  name: "Form",
  components: {Loader},
  mixins: [validationMixin],
  computed: {
    ...mapGetters({
      getIsLoading: 'asyncItems/getIsLoading',
    }),
    isLoading() {
      return this.getIsLoading
    }
  },
  data() {
    return {
      form: {
        title: '',
        text: '',
        mail: '',
        choose: 'bread',
        multiChoose: [],
        diode: false,
        diodeColor: ''
      },
      chooses: [ 'bread', 'water' ],
      multiChooses: [ 'fork', 'spoon', 'knife'],
      isUploadSuccess: ''
    }
  },
  validations: {
    form: {
      title: { required, minLength: minLength(3), maxLength: maxLength(18) },
      text: { required, minLength: minLength(6), maxLength: maxLength(25) },
      mail: { required, email, maxLength: maxLength(25) }
    }
  },
  methods: {
    async formSubmit() {
      this.$v.form.$touch()

      if (!this.$v.form.$error) {
        this.$store.commit('asyncItems/SET_IS_LOADING')
        const response = await fetch('http://localhost:3000/items', {
          method: 'POST',
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(error => {
          console.error(error)
        })
        this.$store.commit('asyncItems/UNSET_IS_LOADING')

        if (response && response.ok) {
          this.isUploadSuccess = 'yes'
          setTimeout(() => { this.isUploadSuccess = '' }, 4000)
          this.resetForm();
        } else {
          this.isUploadSuccess = 'no'
          setTimeout(() => { this.isUploadSuccess = '' }, 4000)
        }
      }
    },
    resetForm() {
      this.form = {
        title: '',
        text: '',
        mail: '',
        choose: 'bread',
        multiChoose: [],
        diode: false,
        diodeColor: ''
      }
      this.$v.form.title.$reset()
      this.$v.form.text.$reset()
      this.$v.form.mail.$reset()
    }
  }
}
</script>

<style>
  .layoutForm input, .layoutForm select {
    display: block;
    margin-top: 2px;
  }

  .layoutForm input#checkbox {
    position: absolute;
    top: 1px;
  }

  .layoutForm input#checkbox + label {
    margin-left: 23px;
  }

  .layoutForm select {
    width: 165px;
    height: 22px;
  }

  .layoutForm select#multiChoose {
    height: 55px;
  }

  .layoutForm .formItem {
    position: relative;
    margin: 5px 0;
  }

  .layoutForm .formItem.inline {
    display: inline-block;
    margin-right: 40px;
  }

  .layoutForm .radio {
    position: absolute;
    top: 2px;
    left: 60px;
  }

  .layoutForm input.error {
    color: red;
    border: solid 1px red;
    border-radius: 2px;
  }

  .layoutForm input.error:focus {
    color: red;
    outline-color: red;
  }

  .layoutForm .error {
    color: red;
    margin: 2px 0;
  }

  .layoutForm .submitSuccess {
    color: green;
    font-size: 20px;
    font-weight: bold;
  }

  .layoutForm .submitFail {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
</style>
