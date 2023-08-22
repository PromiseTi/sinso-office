<!--
* ambassador
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="padd-tb-ba text-center">
      <h2>Apply to Become a Sonior</h2>
    </div>

    <div class="marlrAuto margin-bottom-qi ambCont">
      <client-only>
        <el-form
          :model="addForm"
          ref="addForm"
          :rules="addFormRules"
          class="form"
          label-position="top"
        >
          <h2 class="coloBls">Personal Information</h2>
          <div class="amb">
            <el-form-item prop="firstName" label="First name">
              <el-input
                v-model="addForm.firstName"
                placeholder="Please enter"
              ></el-input>
            </el-form-item>
            <el-form-item prop="lasName" label="Last name">
              <el-input
                v-model="addForm.lasName"
                placeholder="Please enter"
              ></el-input>
            </el-form-item>
          </div>
          <div class="amb">
            <el-form-item prop="email" label="Email">
              <el-input
                v-model="addForm.email"
                placeholder="Please enter"
              ></el-input>
            </el-form-item>
          </div>
          <div class="amb">
            <el-form-item prop="country" label="Country">
              <el-select v-model="addForm.country" placeholder="Please enter">
                <el-option
                  v-for="item in countryList"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="city" label="City">
              <el-input
                v-model="addForm.city"
                placeholder="Please enter"
              ></el-input>
            </el-form-item>
          </div>
          <div class="amb">
            <el-form-item prop="gender" label="Gender">
              <el-select v-model="addForm.gender" placeholder="Please enter">
                <el-option
                  v-for="item in genderList"
                  :key="item.a"
                  :label="item.b"
                  :value="item.a"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="ageRange" label="Age range">
              <el-select v-model="addForm.ageRange" placeholder="Please enter">
                <el-option
                  v-for="item in ageRangeList"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <h2 class="coloBls">Education and Work Experience</h2>
          <el-form-item prop="blockchainWork" id="taPos">
            <div class="padding-left-xs inlineBlock" slot="label">
              <div class="fontBlod fontSize-16">
                Do you work in the blockchain industry?
              </div>
              <div>
                If the answer is yes,Please remember to answer the company name.
              </div>
            </div>
            <el-select
              v-model="addForm.blockchainWork"
              placeholder="Please enter"
            >
              <el-option
                v-for="item in blockchainWorkList"
                :key="item.b"
                :label="item.b"
                :value="item.a"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="companyName" label="Company Name">
            <el-input
              v-model="addForm.companyName"
              placeholder="Please enter"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="fullTimeStudy"
            label="Are you currently studying/pursuing an education full-time?"
          >
            <el-select
              v-model="addForm.fullTimeStudy"
              placeholder="Please enter"
            >
              <el-option
                v-for="item in blockchainWorkList"
                :key="item.b"
                :label="item.b"
                :value="item.a"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <h2 class="coloBls">Language</h2>
          <el-form-item
            prop="englishLevel"
            label="What is your level of English?"
          >
            <el-select
              v-model="addForm.englishLevel"
              placeholder="Please enter"
            >
              <el-option
                v-for="item in englishLevelList"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Other preferred language">
            <el-select
              v-model="addForm.otherPerferredLanguage"
              placeholder="Please enter"
            >
              <el-option
                v-for="item in otherPerferredLanguageList"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <h2 class="coloBls">Social Media</h2>
          <div class="amb">
            <el-form-item prop="twitterHandle" label="Twitter username">
              <el-input
                v-model="addForm.twitterHandle"
                placeholder="Please enter"
              ></el-input>
            </el-form-item>
            <el-form-item prop="telegramUsername" label="Telegram username">
              <el-input
                v-model="addForm.telegramUsername"
                placeholder="Please enter"
              ></el-input>
            </el-form-item>
          </div>
          <el-form-item prop="discordUserName" label="Discord username">
            <el-input
              v-model="addForm.discordUserName"
              placeholder="Please enter"
            ></el-input>
          </el-form-item>
          <h2 class="coloBls">Relevant experience and strengths</h2>
          <!-- <el-form-item
            prop="soniorTypes"
            label="The sonior types you choose are"
          >
            <el-checkbox-group v-model="addForm.soniorTypes">
              <el-checkbox
                class="disBlocks"
                v-for="item in soniorTypesList"
                :key="item"
                :label="item"
                >{{ item }}</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item> -->
          <el-form-item prop="experienceStrengths" id="taPos">
            <div class="padding-left-xs inlineBlock" slot="label">
              <div class="fontBlod fontSize-16">
                What are your experiences and strengths in order to become a
                Sonior?
              </div>
              <div>
                Please briefly introduce yourself and detail your work
                experience and strengths below.
              </div>
            </div>
            <el-input
              type="textarea"
              :rows="5"
              v-model="addForm.experienceStrengths"
              placeholder="Please enter"
            ></el-input>
          </el-form-item>
          <el-form-item prop="resumeLink" id="taPos">
            <div class="padding-left-xs inlineBlock" slot="label">
              <div class="fontBlod fontSize-16">
                Please fill in your resume link:
              </div>
            </div>
            <el-input
              type="textarea"
              :rows="5"
              v-model="addForm.resumeLink"
              placeholder="Please enter"
            ></el-input>
          </el-form-item>
          <el-form-item prop="linkedInLink" id="taPos">
            <div class="padding-left-xs inlineBlock" slot="label">
              <div class="fontBlod fontSize-16">
                Please fill in your LinkedIn link:
              </div>
            </div>
            <el-input
              type="textarea"
              :rows="5"
              v-model="addForm.linkedInLink"
              placeholder="Please enter"
            ></el-input>
          </el-form-item>
          <h2 class="coloBls">Additional Information</h2>
          <el-form-item
            prop="interest"
            label="What are your areas of interest in the SINSO Program?"
          >
            <el-input
              type="textarea"
              :rows="5"
              v-model="addForm.interest"
              placeholder="Please enter"
            ></el-input>
          </el-form-item>
          <div class="margin-top fontSize-14 colo999">
            The result will be sent to your email within 3 days, please do check
            your spam folder incase you didn't receive it.
          </div>
          <div class="margin-top-xs margin-bottom fontSize-14 colo999">
            If you have any questions during the application, please contact the
            relevant staff on Telegram: @Edithsinso/@Eddysinso
          </div>
          <!-- <el-form-item>
            <el-checkbox v-model="checked"
              >staff eamil: edith@sinso.io</el-checkbox
            >
          </el-form-item> -->
        </el-form>

        <el-button
          :loading="isLoading"
          class="buttds"
          type="primary"
          @click="doSave"
          >Submit</el-button
        >

        <!-- 弹框 -->
        <el-dialog
          :show-close="false"
          :close-on-click-modal="false"
          :title="elTitle"
          :visible.sync="isShow"
          width="400px"
          center
        >
          <div class="text-center margin-tb-sm">
            <p v-if="elTitle == 'Success'">Submitted successfully</p>
            <p v-if="elTitle == 'Tips'">
              The email has been taken. Please enter a different email address.
            </p>
            <p v-if="elTitle == 'Error'">
              Network not available. Please check your settings and try again.
            </p>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button
              style="width: 300px"
              type="primary"
              @click="isShow = false"
              >Confirm</el-button
            >
          </span>
        </el-dialog>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      },
    ],
  },
  name: "",
  components: {},
  props: {},
  data() {
    var obj = {
      required: true,
      message: "*is required, please fill in the following carefully",
      trigger: ["blur", "change"],
    };
    return {
      checked: true,
      isShow: false,
      isLoading: false,
      elTitle: "",
      addForm: {
        companyName: "",
        ageRange: "",
        blockchainWork: "",
        fullTimeStudy: "",
        city: "",
        country: "",
        discordUserName: "",
        email: "",
        englishLevel: "",
        firstName: "",
        gender: "",
        interest: "",
        experienceStrengths: "",
        lasName: "",
        otherPerferredLanguage: "",
        telegramUsername: "",
        twitterHandle: "",
        resumeLink: "",
        linkedInLink: "",
      },
      addFormRules: {
        ageRange: { ...obj },
        blockchainWork: { ...obj },
        city: { ...obj },
        country: { ...obj },
        discordUserName: { ...obj },
        email: [
          { ...obj },
          {
            type: "email",
            message: "Please enter the correct email address",
            trigger: ["change", "blur"],
          },
        ],
        englishLevel: { ...obj },
        firstName: { ...obj },
        gender: { ...obj },
        interest: { ...obj },
        experienceStrengths: { ...obj },
        lasName: { ...obj },
        telegramUsername: { ...obj },
        twitterHandle: { ...obj },
        soniorTypes: { ...obj },
      },
      countryList: [],
      genderList: [],
      ageRangeList: [],
      blockchainWorkList: [],
      englishLevelList: [],
      otherPerferredLanguageList: [],
      soniorTypesList: [],
    };
  },
  computed: {},
  methods: {
    init() {
      this.countryList = Object.freeze([
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Asia/Pacific Region",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Caribbean Netherlands",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote d'Ivoire",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czech Republic",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Europe",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern and Antarctic Lands",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia (FYROM)",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "North Korea",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn Islands",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Réunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Barthélemy",
        "Saint Helena",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "U.S. Virgin Islands",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ]);
      this.genderList = Object.freeze([
        { a: "Female", b: "Female" },
        { a: "Male", b: "Male" },
        { a: "Other", b: "Other/Prefer Not to Identify" },
      ]);
      this.ageRangeList = Object.freeze([
        "16-22",
        "23-29",
        "30-39",
        "40-49",
        "50+",
      ]);
      this.blockchainWorkList = Object.freeze([
        { a: "true", b: "Yes" },
        { a: "false", b: "No" },
      ]);
      this.englishLevelList = Object.freeze([
        "Basic",
        "Intermediate",
        "Fluent",
        "Native",
      ]);
      this.otherPerferredLanguageList = Object.freeze([
        "Afrikaans",
        "Albanian",
        "Albanian - Albania",
        "Arabic",
        "Arabic - Algeria",
        "Arabic - Bahrain",
        "Arabic - Egypt",
        "Arabic - Iraq",
        "Arabic - Jordan",
        "Arabic - Kuwait",
        "Arabic - Lebanon",
        "Arabic - Libya",
        "Arabic - Morocco",
        "Arabic - Oman",
        "Arabic - Qatar",
        "Arabic - Saudi Arabia",
        "Arabic - Sudan",
        "Arabic - Syria",
        "Arabic - Tunisia",
        "Arabic - United Arab Emirates",
        "Arabic - Yemen",
        "Armenian",
        "Basque",
        "Belarusian",
        "Belarusian - Belarus",
        "Bulgarian",
        "Bulgarian - Bulgaria",
        "Catalan",
        "Catalan - Catalan",
        "Chinese",
        "Chinese - China",
        "Chinese - Hong Kong SAR",
        "Chinese - Macau SAR",
        "Chinese - Singapore",
        "Chinese - Taiwan",
        "Chinese (Simplified)",
        "Chinese (Traditional)",
        "Croatian",
        "Croatian - Croatia",
        "Czech",
        "Czech - Czech Republic",
        "Danish",
        "Danish - Denmark",
        "Dutch",
        "Dutch - Belgium",
        "Dutch - The Netherlands",
        "English",
        "English - Australia",
        "English - Canada",
        "English - Hong Kong",
        "English - India",
        "English - Ireland",
        "English - Malaysia",
        "English - Malta",
        "English - New Zealand",
        "English - Philippines",
        "English - Singapore",
        "English - South Africa",
        "English - United Kingdom",
        "English - United States",
        "English - Zimbabwe",
        "Estonian",
        "Estonian - Estonia",
        "Faroese",
        "Farsi",
        "Finnish",
        "Finnish - Finland",
        "French",
        "French - Belgium",
        "French - Canada",
        "French - France",
        "French - Luxembourg",
        "French - Monaco",
        "French - Switzerland",
        "Galician",
        "Georgian",
        "German",
        "German - Austria",
        "German - Germany",
        "German - Greece",
        "German - Liechtenstein",
        "German - Luxembourg",
        "German - Switzerland",
        "Greek",
        "Greek - Cyprus",
        "Greek - Greece",
        "Gujarati",
        "Hebrew",
        "Hebrew - Israel",
        "Hindi",
        "Hindi - India",
        "Hungarian",
        "Hungarian - Hungary",
        "Icelandic",
        "Icelandic - Iceland",
        "Indonesian",
        "Indonesian - Indonesia",
        "Irish",
        "Irish - Ireland",
        "Italian",
        "Italian - Italy",
        "Italian - Switzerland",
        "Japanese",
        "Japanese - Japan",
        "Kannada",
        "Kazakh kok Konkani",
        "Konkani",
        "Korean",
        "Korean - South Korea",
        "Kyrgyz",
        "Latvian",
        "Latvian - Latvia",
        "Lithuanian",
        "Lithuanian - Lithuania",
        "Macedonian",
        "Macedonian - Macedonia",
        "Malay",
        "Malay - Brunei",
        "Malay - Malaysia",
        "Maltese",
        "Maltese - Malta",
        "Marathi",
        "Mongolian",
        "Burmese",
        "Burmese - Myanmar (Burma)",
        "Norwegian",
        "Norwegian Bokmal",
        "Norwegian - Norway",
        "Polish",
        "Polish - Poland",
        "Portuguese",
        "Portuguese - Brazil",
        "Portuguese - Portugal",
        "Punjabi",
        "Romanian",
        "Romanian - Romania",
        "Russian",
        "Russian - Russia",
        "Sanskrit",
        "Serbian",
        "Serbian - Bosnia and Herzegovina",
        "Serbian - Montenegro",
        "Serbian - Serbia",
        "Serbian - Serbia and Montenegro (Former)",
        "Slovak",
        "Slovak - Slovakia",
        "Slovenian",
        "Slovenian - Slovenia",
        "Spanish",
        "Spanish - Argentina",
        "Spanish - Bolivia",
        "Spanish - Chile",
        "Spanish - Colombia",
        "Spanish - Costa Rica",
        "Spanish - Cuba",
        "Spanish - Dominican Republic",
        "Spanish - Ecuador",
        "Spanish - El Salvador",
        "Spanish - Guatemala",
        "Spanish - Honduras",
        "Spanish - Mexico",
        "Spanish - Nicaragua",
        "Spanish - Panama",
        "Spanish - Paraguay",
        "Spanish - Peru",
        "Spanish - Puerto Rico",
        "Spanish - Spain",
        "Spanish - United States",
        "Spanish - Uruguay",
        "Spanish - Venezuela",
        "Swahili",
        "Swedish",
        "Swedish - Finland",
        "Swedish - Sweden",
        "Syriac",
        "Tamil",
        "Tatar",
        "Telugu",
        "Thai",
        "Thai - Thailand",
        "Turkish",
        "Turkish - Turkey",
        "Ukrainian",
        "Ukrainian - Ukraine",
        "Urdu",
        "Vietnamese",
        "Vietnamese - Vietnam",
        "Bengali",
      ]);
      this.soniorTypesList = Object.freeze([
        "Technical",
        "Projects",
        "Language",
        "Content",
        "Design",
        "Comm building",
      ]);
    },
    doSave() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.interface();
        }
      });
    },
    interface() {
      this.isLoading = true;
      this.elTitle = "";
      const apiUrl = "https://www.whitelist.vip/api/";
      // const apiUrl = "http://192.168.1.71:21006/api/";
      $.ajax({
        url: `${apiUrl}app/sinso_websit/senior_member_add`,
        type: "POST",
        dataType: "json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          ...this.addForm,
        }),
        success: (data) => {
          if (data.status === "ok") {
            this.elTitle = "Success";
            this.$refs.addForm.resetFields();
          } else if (data.errorCode === 10041) {
            this.elTitle = "Tips";
          } else {
            this.elTitle = "Error";
          }
          this.isShow = true;
          this.isLoading = false;
        },
        error: () => {
          this.isShow = true;
          this.elTitle = "Error";
          this.isLoading = false;
        },
      });
    },
  },
  created() {
    this.init();
  },
  mounted() {},
};
</script>
<style scoped>
.ambCont {
  width: 900px;
}
h2 {
  margin: 30px 0px;
  font-size: 20px;
}
.amb {
  display: flex;
  justify-content: space-between;
}
::v-deep .amb .el-input {
  width: 400px;
}
::v-deep .el-select {
  width: 100%;
}
::v-deep #taPos {
  position: relative;
}
::v-deep #taPos .el-form-item__label::before {
  position: absolute;
  left: 0;
  top: 0;
}
.buttds {
  display: block;
  width: 300px;
  height: 44px;
  font-size: 18px;
  margin: 50px auto 100px auto;
}
@media screen and (max-width: 900px) {
  .padd-tb-ba {
    padding: 20px 0px;
  }
  .ambCont {
    width: 96vw;
    margin-left: auto;
    margin-right: auto;
  }
  .amb {
    display: block;
  }
  ::v-deep .amb .el-input {
    width: 100%;
  }
  ::v-deep .el-dialog {
    margin-top: 40vh !important;
    width: 90vw !important;
  }
}
</style>
