<template>
  <WindowFrame>
    <div class="space-y-10 p-5">
      <div class="flex flex-wrap gap-5">
        <button class="btn btn-default" @click="toggleDialog">Dialog</button>
        <button class="btn btn-border">Restore</button>
        <button class="btn btn-primary">Save</button>
        <button class="btn btn-secondary">Edit</button>
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
      </el-radio-group>

      <div class="flex space-x-5">
        <div>
          <input-control placeholder="Search..." v-model="search" />
        </div>

        <div>
          <input-control
            placeholder="Add contact"
            :icon="searchOutline"
            v-model="contact"
          />
        </div>

        <div class="w-32">
          <el-slider v-model="slider" :show-tooltip="false" />
        </div>
      </div>

      <div>
        <SelectControl v-model="selectInput">
          <option value="1">100%</option>
          <option value="2">150%</option>
          <option value="2">200%</option>
        </SelectControl>
      </div>

      <el-switch v-model="switchVal" />

      <el-progress :percentage="50" :indeterminate="true" :show-text="false" />
    </div>
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

import { WindowFrame, InputControl, SelectControl } from "@/components/modules";

export default {
  components: {
    IonIcon,
    WindowFrame,
    InputControl,
    SelectControl,
  },
  data() {
    return {
      heartOutline,
      searchOutline,
      folderOutline,
      cogOutline,
      slider: 0,
      selectInput: 1,
      switchVal: false,
      radio1: "New York",
      search: "",
      contact: "",
    };
  },
  methods: {
    toggleDialog() {
      this.$store.topDialog.set({
        component: markRaw(
          defineAsyncComponent(() =>
            import("./_system/TopDialog/NewProject.vue")
          )
        ),
      });
    },
    save() {
      window.alert("Saved!");
    },
  },
  mounted() {
    this.$store.titlebar.set({
      hasBackground: true,
      component: markRaw(
        defineAsyncComponent(() => import("./_system/TitleBar.vue"))
      ),
    });

    this.$store.window.set({
      hasBackground: true,
    });

    this.$store.sidebar.show("left");
    this.$store.sidebar.show("right");
  },
};
</script>
