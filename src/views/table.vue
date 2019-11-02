<template>
  <v-content class="test">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <div class="json">
          <div class="json-header text-header">json:</div>
          <textarea
            v-model="json"
            name="jsonarea"
            id="jsonarea"
            cols="60"
            rows="15"
            class="json-area"
          ></textarea>
        </div>
      </v-row>
      <v-row align="center" justify="center">
        <div>
          <div class="text-header">checked: {{checked}}</div>
          <div class="table border2px">
            <div class="table-header border1px">
              <div
                v-for="(col, index) in colums"
                :key="index"
                :class="[`table-${col}`]"
              >{{col}}</div>
            </div>
            <div
              v-for="(row, index) in pagination"
              :key="index"
              class="table-row border1px"
              :class="{ 'checked': row.checked }"
              @click="checkRow(index)"
            >
              <div
                v-for="(col, index2) in colums"
                :key="index2"
                :class="[`table-${col}`]"
              >
                {{row[col]}}
              </div>
            </div>
          </div>
          <div class="table-action">
            <div
              v-for="page in pages"
              :key="page"
              @click="chechPage(page)"
              class="table-action-button border1px"
              :class="{ 'checked': page === pgpage }"
            >{{page}}</div>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'tablechecked',
  data: () => ({
    pgsize: 7, // Количество элементов на странице
    pgpage: 1, // Страница по умолчанию
    colums: [ // Отображаемые в таблице колонки
      'title',
      'value',
    ],
    json: `{"rows": [
  {"title": "Штука №1", "value": 14.3},
  {"title": "Штука №2", "value": 27.4},
  {"title": "Штука №3", "value": -19.86},
  {"title": "Штука №4", "value": 0.86},
  {"title": "Штука №5", "value": 27.4},
  {"title": "Штука №6", "value": 7.7},
  {"title": "Штука №7", "value": 2.81},
  {"title": "Штука №8", "value": 2.43},
  {"title": "Штука №9", "value": -9.8},
  {"title": "Штука №10", "value": 77.77},
  {"title": "Штука №11", "value": 27.4},
  {"title": "Штука №12", "value": -19.86},
  {"title": "Штука №13", "value": 0.86},
  {"title": "Штука №14", "value": 27.4},
  {"title": "Штука №15", "value": 7.7},
  {"title": "Штука №16", "value": 2.81},
  {"title": "Штука №17", "value": 2.43},
  {"title": "Штука №18", "value": -9.8},
  {"title": "Штука №19", "value": 77.77}
]}
`,
  }),
  computed: {
    rows() {
      // получение всех строк массива
      return JSON.parse(this.json).rows;
    },
    pagination() {
      // получение усеченного массива для текущей страницы
      return this.rows.slice(this.pgindex, this.pgsize * this.pgpage);
    },
    pgindex() {
      // начальное значение от общего индекса на текущей странице
      return this.pgsize * this.pgpage - this.pgsize;
    },
    pages() {
      // Подсчет количества страниц
      return Math.ceil(this.rows.length / this.pgsize);
    },
    checked() {
      // Подсчет результата по выбраным строкам
      return this.rows.reduce((accum, item) => {
        if (item.checked) return accum + item.value;
        return accum;
      }, 0).toFixed(2);
    },
  },
  methods: {
    checkRow(i) {
      // Выбор/снятие выбора по щелчку на строке
      const jsonobj = JSON.parse(this.json);
      jsonobj.rows[this.pgindex + i].checked = !jsonobj.rows[this.pgindex + i].checked;
      this.json = JSON.stringify(jsonobj)
        .replace(/},{/g, '},\n  {')
        .replace(/:/g, ': ')
        .replace(/,/g, ', ')
        .replace(/\[{/g, '[\n  {')
        .replace(/}\]/g, '}\n]');
    },
    chechPage(page) {
      // Выбор текущей страницы для отображения
      this.pgpage = page;
    },
  },
};
</script>

<style scoped>
.json-header {
  display: block;
}
.json-area {
  display: block;
  background: #ccc;
}
.table-header {
  display: block;
  padding: 7px;
  color: #333;
  text-transform: uppercase;
  font-size: 1.25rem !important;
  font-weight: 500;
}
.table-row {
  display: block;
  padding: 7px;
}
.checked {
  background: #ccc;
}
.table-title {
  display: inline-block;
  width: 200px;
}
.table-value {
  display: inline-block;
  width: 100px;
  text-align: end;
}
.table-action {
  display: inline-block;
  padding: 7px;
  color: #333;
  text-transform: uppercase;
  font-size: 1.25rem !important;
  font-weight: 500;
}
.table-action-button {
  display: inline-block;
  padding: 10px;
}
.border2px {
  border: 2px solid #1E90FF;
}
.border1px {
  border: 1px solid #1E90FF;
}
.text-header {
  padding: 7px;
  color: #333;
  text-transform: uppercase;
  font-size: 1.25rem !important;
  font-weight: 500;
  text-align: center;
}
</style>
