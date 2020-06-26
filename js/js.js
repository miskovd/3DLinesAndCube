//Lesson 1: Draw lines and Cube(Animated)
const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70/*FOV*/ , window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0x4d4d4d);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const points = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(3, 2),
]

const material = new THREE.LineBasicMaterial({ color: 0x0ff00f });
const geometryLine =  new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometryLine, material);
scene.add(line);

//Cube
const material1 = new THREE.MeshBasicMaterial({color: 0xddddd});
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry, material1);
scene.add(cube);

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    //Animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.04;
}

animate();