import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  duration: '5m',
  vus: 50,
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<60000'], // 95 percent of response times must be below 500ms
  },
}

export default function () {
  const res = http.get('https://fearlessvegetarian.netlify.app/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res2 = http.get('https://fearlessvegetarian.netlify.app/recipe');
  check(res2, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res3 = http.get('https://fearlessvegetarian.netlify.app/beetroot');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res4 = http.get('https://fearlessvegetarian.netlify.app/saagpaneer');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res5 = http.get('https://fearlessvegetarian.netlify.app/chipotle');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res6 = http.get('https://fearlessvegetarian.netlify.app/besan');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res7 = http.get('https://fearlessvegetarian.netlify.app/blackeyedbeans');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res8 = http.get('https://fearlessvegetarian.netlify.app/hakkanoodle');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
