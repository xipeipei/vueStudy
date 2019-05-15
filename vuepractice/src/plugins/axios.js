import api from "@/common/lib/api.js";
import { ajax } from "@/common/lib/http.js";
/* GET 删除任务 */
export function workDeleteTask(params) {
  return ajax({
    url: api.workDeleteTask,
    params: params
  });
}
