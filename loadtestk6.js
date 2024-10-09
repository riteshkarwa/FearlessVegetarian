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
  check(res3, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res4 = http.get('https://fearlessvegetarian.netlify.app/saagpaneer');
  check(res4, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res5 = http.get('https://fearlessvegetarian.netlify.app/chipotle');
  check(res5, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res6 = http.get('https://fearlessvegetarian.netlify.app/besan');
  check(res6, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res7 = http.get('https://fearlessvegetarian.netlify.app/blackeyedbeans');
  check(res7, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res8 = http.get('https://fearlessvegetarian.netlify.app/hakkanoodle');
  check(res8, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res9 = http.get('https://fearlessvegetarian.netlify.app/about');
  check(res9, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res10 = http.get('https://fearlessvegetarian.netlify.app/potato');
  check(res10, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res11 = http.get('https://fearlessvegetarian.netlify.app/sandwich');
  check(res11, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res12 = http.get('https://fearlessvegetarian.netlify.app/dalmakhani');
  check(res12, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res13 = http.get('https://fearlessvegetarian.netlify.app/privacypolicy');
  check(res13, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res14 = http.get('https://fearlessvegetarian.netlify.app/chorizorice');
  check(res14, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res15 = http.get('https://fearlessvegetarian.netlify.app/riceandbeans');
  check(res15, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res16 = http.get('https://fearlessvegetarian.netlify.app/upma');
  check(res16, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res17 = http.get('https://fearlessvegetarian.netlify.app/contact');
  check(res17, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res18 = http.get('https://fearlessvegetarian.netlify.app/donate');
  check(res18, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res19 = http.get('https://fearlessvegetarian.netlify.app/cabbage');
  check(res19, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res20 = http.get('https://fearlessvegetarian.netlify.app/okra');
  check(res20, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res21 = http.get('https://fearlessvegetarian.netlify.app/rajmah');
  check(res21, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

