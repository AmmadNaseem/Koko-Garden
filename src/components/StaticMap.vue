<template>
  <div>
    <div ref="myCanvas"></div>
  </div>
</template>
  
  <script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import useKokoTrees from "@/composables/api";
import { onMounted, computed } from "vue";

export default {
  name: "MyScene",
  setup() {
    const { trees, getTrees } = useKokoTrees();

    onMounted(getTrees);

    const treeList = computed(() => {
      return trees.value;
    });

    return {
      treeList,
    };
  },
  mounted() {
    // create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // create camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    camera.position.set(0, 0, 100);

    // create renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.myCanvas.appendChild(renderer.domElement);

    // create light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(100, 100, 100);
    scene.add(light);

    // create controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.screenSpacePanning = false;
    controls.minDistance = 900;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    // create ground
    const groundGeometry = new THREE.PlaneBufferGeometry(1000, 1000);
    groundGeometry.rotateX(-4.7);
    const texture1 = new THREE.TextureLoader().load("images/bg.png");
    const groundMaterial = new THREE.MeshStandardMaterial({
      map: texture1,
      roughness: 1,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.receiveShadow = true;
    scene.add(ground);

    const trunkGeometry = new THREE.CylinderGeometry(2, 10, 50, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x6b4423 });
    const foliageGeometry = new THREE.ConeGeometry(20, 50, 8);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x59f261 });

    for (let i = 0; i < 100; i++) {
      const treeGroup = new THREE.Group();

      const trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunkMesh.position.y = 25;
      treeGroup.add(trunkMesh);

      const foliageMesh = new THREE.Mesh(foliageGeometry, foliageMaterial);
      foliageMesh.position.y = 50;
      treeGroup.add(foliageMesh);

      treeGroup.position.x = Math.random() * 800 - 400;
      treeGroup.position.y = 0;
      treeGroup.position.z = Math.random() * 800 - 400;

      scene.add(treeGroup);
    }

    // create tree
    const trunkGeometry1 = new THREE.CylinderGeometry(2, 10, 50, 8);
    const trunkMaterial1 = new THREE.MeshStandardMaterial({ color: 0x6b4423 });
    const foliageGeometry1 = new THREE.SphereGeometry(20, 32, 32);
    const foliageMaterial1 = new THREE.MeshStandardMaterial({
      color: 0x2e8b57,
    });

    for (let i = 0; i < 100; i++) {
      const treeGroup1 = new THREE.Group();

      const trunkMesh1 = new THREE.Mesh(trunkGeometry1, trunkMaterial1);
      trunkMesh1.position.y = 25;
      treeGroup1.add(trunkMesh1);

      const foliageMesh1 = new THREE.Mesh(foliageGeometry1, foliageMaterial1);
      foliageMesh1.position.y = 50;
      treeGroup1.add(foliageMesh1);

      treeGroup1.position.x = Math.random() * 800 - 400;
      treeGroup1.position.y = 0;
      treeGroup1.position.z = Math.random() * 800 - 400;

      scene.add(treeGroup1);
    }

    // render scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };
    animate();
  },
};
</script>
  <style>
canvas {
  width: 100px;
  height: 100px;
}
</style>