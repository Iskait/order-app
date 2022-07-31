import axios from "axios";

const useSendData = async ({name, city_id, email, phone}) => {
  return axios({
    method: 'post',
    url: 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/',
    data: {
      name,
      email,
      phone,
      city_id,
    }
  });
}

export default useSendData;