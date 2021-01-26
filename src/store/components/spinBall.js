export const SPIN_BALL = (state) => {
  window.localStorage.clear();

  state.ball_effect.play();
  state.chip_ammount_won = null;
  state.spin_btn = !state.spin_btn;
  state.rotate_wheel = state.spin_btn ? 'rotate-right' : 'rotate-left',
  state.rotate_ball = state.spin_btn ? 'rotate-left show' : 'rotate-right show',
  state.button_text = 'Place your bets please!';
  state.disabled_spin = 'disabled';
  state.output_number = null;
  state.winning_with = [];
}

export const spinBall = (context) => {
  context.commit('SPIN_BALL')
}
