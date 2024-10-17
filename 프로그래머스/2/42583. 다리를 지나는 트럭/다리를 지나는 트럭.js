const solution = (bridge_length, weight, truck_weights) => {
  let time = 0;
  let current_weight = 0; //다리위의 무게
  let on_bridge = Array(bridge_length).fill(0); //다리에 올라갈 수 있는 길이

  while (on_bridge.length > 0) {
    time++;

    //다리에서 트럭이 내린 경우 무게 제외
    current_weight -= on_bridge.shift();

    //다리에 더 올릴 수 있는 경우
    if (truck_weights.length > 0) {
      // 다음 트럭을 올릴 수 있는지 확인
      if (current_weight + truck_weights[0] <= weight) {
        let next_truck = truck_weights.shift();
        on_bridge.push(next_truck);
        current_weight += next_truck;
      } else {
        on_bridge.push(0);
      }
    }
  }

  return time;
};