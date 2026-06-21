export function buildOVSScene(host, THREE) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f100d);

  const camera = new THREE.PerspectiveCamera(45, host.clientWidth / host.clientHeight, 0.1, 100);
  camera.position.set(4.2, 3.0, 6.2);
  camera.lookAt(0, 1, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(host.clientWidth, host.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  host.appendChild(renderer.domElement);

  const key = new THREE.DirectionalLight(0xffddb5, 2.2);
  key.position.set(-3, 5, 4);
  scene.add(key);
  scene.add(new THREE.AmbientLight(0x6f7462, 0.7));

  const wallMat = new THREE.MeshStandardMaterial({ color: 0x4a473d, roughness: 0.82 });
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x2c2b26, roughness: 0.9 });
  const propMat = new THREE.MeshStandardMaterial({ color: 0x89836c, roughness: 0.75 });

  const floor = new THREE.Mesh(new THREE.BoxGeometry(6, 0.12, 5), floorMat);
  floor.position.y = -0.06;
  scene.add(floor);

  const backWall = new THREE.Mesh(new THREE.BoxGeometry(6, 2.8, 0.16), wallMat);
  backWall.position.set(0, 1.4, -2.5);
  scene.add(backWall);

  const sideWall = new THREE.Mesh(new THREE.BoxGeometry(0.16, 2.8, 5), wallMat);
  sideWall.position.set(-3, 1.4, 0);
  scene.add(sideWall);

  const mirror = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.5, 0.04), new THREE.MeshStandardMaterial({ color: 0x0c1516, metalness: 0.35, roughness: 0.3 }));
  mirror.position.set(-2.92, 1.55, -0.8);
  mirror.rotation.y = Math.PI / 2;
  scene.add(mirror);

  const roomMarker = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.18, 0.04), propMat);
  roomMarker.position.set(0.1, 1.35, -2.39);
  scene.add(roomMarker);

  window.addEventListener('resize', () => {
    camera.aspect = host.clientWidth / host.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(host.clientWidth, host.clientHeight);
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}
