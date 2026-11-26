import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {

  stages: [
    { duration: '2m', target: 50 }, // Ramp-up to 50 VUs over 2 minutes
    { duration: '5m', target: 50 }, // Stay at 50 VUs for 6 minutes
    { duration: '3m', target: 0 }, // Ramp-down to 0 VUs over 2 minutes
  ], 
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<60000'], // 95 percent of response times must be below 6000ms
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

  const res22 = http.get('https://fearlessvegetarian.netlify.app/potatocapsicum');
  check(res22, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res23 = http.get('https://fearlessvegetarian.netlify.app/articles');
  check(res23, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res24 = http.get('https://fearlessvegetarian.netlify.app/onion');
  check(res24, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res25 = http.get('https://fearlessvegetarian.netlify.app/articles/wheretobegin');
  check(res25, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res26 = http.get('https://fearlessvegetarian.netlify.app/couscous');
  check(res26, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res27 = http.get('https://fearlessvegetarian.netlify.app/lentil');
  check(res27, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res28 = http.get('https://fearlessvegetarian.netlify.app/quinoamoongdal');
  check(res28, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res29 = http.get('https://fearlessvegetarian.netlify.app/spinachbesan');
  check(res29, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res30 = http.get('https://fearlessvegetarian.netlify.app/tawapulao');
  check(res30, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res31 = http.get('https://fearlessvegetarian.netlify.app/poha');
  check(res31, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  const res32 = http.get('https://fearlessvegetarian.netlify.app/rajgirahalwa');
  check(res32, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

