<template>
  <WindowFrame>
    <template #main>
      <div class="space-y-10 p-5">
        <div class="flex space-x-5">
          <button class="btn btn-default" @click="$store.topDialog.show()">
            Dialog
          </button>
          <button class="btn btn-primary">Save</button>
          <button class="btn btn-secondary">Edit</button>
          <button class="btn btn-border">Restore</button>
          <button class="btn btn-default btn-icon">
            <ion-icon :icon="cogOutline"></ion-icon>
          </button>
          <button class="btn btn-transparent btn-icon">
            <ion-icon :icon="heartOutline"></ion-icon>
          </button>
          <button class="btn btn-default" disabled>Disabled</button>
        </div>

        <el-radio-group v-model="radio1" size="large">
          <el-radio-button label="New York" />
          <el-radio-button label="Washington" />
          <el-radio-button label="Los Angeles" />
          <el-radio-button label="Chicago" />
        </el-radio-group>

        <div class="flex space-x-10">
          <input-control placeholder="Search..." v-model="search" />

          <input-control
            placeholder="Add contact"
            :icon="searchOutline"
            button-text="Save"
            :button-action="save"
            v-model="contact"
          />
        </div>

        <div>
          <SelectControl v-model="selectInput">
            <option value="1">100%</option>
            <option value="2">150%</option>
            <option value="2">200%</option>
          </SelectControl>
        </div>

        <el-switch v-model="switchVal" />

        <el-progress
          :percentage="50"
          :indeterminate="true"
          :show-text="false"
        />

        <el-slider v-model="slider" :show-tooltip="false" />

        <div class="grid grid-cols-2 gap-10">
          <CardControl
            v-for="(card, index) in cards"
            :key="index"
            :active="activeCard === index"
            @click="toggleCard(index)"
            :label="card.label"
            :subtitle="card.subtitle"
          >
            <div class="p-8 leading-none">
              <ion-icon
                :icon="folderOutline"
                class="text-5xl group-active:text-primary-500"
                :class="[activeCard === index ? 'text-primary-500' : '']"
              ></ion-icon>
            </div>
          </CardControl>
        </div>
      </div>
    </template>
  </WindowFrame>
</template>

<script>
import { markRaw, defineAsyncComponent } from "vue";

import {
  heartOutline,
  searchOutline,
  folderOutline,
  cogOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

import WindowFrame from "../../components/modules/WindowFrame.vue";
import InputControl from "../../components/atoms/InputControl.vue";
import SelectControl from "../../components/atoms/SelectControl.vue";
import CardControl from "../../components/atoms/CardControl.vue";

export default {
  components: {
    IonIcon,
    WindowFrame,
    InputControl,
    SelectControl,
    CardControl,
  },
  data() {
    return {
      heartOutline,
      searchOutline,
      folderOutline,
      cogOutline,
      slider: 0,
      selectInput: 1,
      activeCard: -1,
      switchVal: false,
      radio1: "New York",
      search: "",
      contact: "",
      cards: [
        {
          content: "Hello",
          label: "Lorem ipsum",
          subtitle: "10 KB",
        },
        {
          content: "World",
          label: "Dolor sit amet",
        },
      ],
    };
  },
  methods: {
    toggleCard(index) {
      this.activeCard = index;
    },
    save() {
      window.alert("Saved!");
    },
  },
  mounted() {
    this.$store.titlebar.setTitlebar({
      hasBackground: true,
      center: markRaw(defineAsyncComponent(() => import("./Title/Center.vue"))),
      left: markRaw(defineAsyncComponent(() => import("./Title/Left.vue"))),
      right: markRaw(defineAsyncComponent(() => import("./Title/Right.vue"))),
    });
  },
};
</script>
