import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "./table.template";
import {resize} from "@/components/table/table.resize";
import {shouldResize} from "@/components/table/table.functions";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      listeners: ["mousedown"],
    });
  }

  toHTML() {
    return createTable(35);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resize.call(this, event);
    }
  }
}
