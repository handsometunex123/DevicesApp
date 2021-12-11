import { trigger, animate, state, style, transition } from "@angular/animations"

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({opacity: 0}),
    animate('800ms ease-in-out', style({opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'translate(0)'}),
    animate('800ms ease-in-out', style({opacity: 0}))
  ])
]);

export const slideUpDown = trigger('slideUpDown', [
  transition(':enter', [
    style({
      position: 'absolute',
      bottom: '-100%',
      opacity: 0
    }),
    animate('800ms ease-in', style({
      position: '*',
      bottom: '*',
      opacity: 1
    }))
  ]),

  transition(':leave', [
    style({
      position: '*',
      bottom: '*',
      opacity: 1
    }),
    animate('800ms ease-in-out', style({
      position: 'absolute',
      bottom: '-100%',
      opacity: 0
    }))
  ])
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('600ms ease-in', style({
      opacity: 1
    }))
  ])
]);


export const slideInOutLeft = trigger('slideInOutLeft', [
  transition(':enter', [
    style({
      position: 'absolute',
      left: '-100%'
    }),
    animate('800ms ease-in', style({
      position: '*',
      left: '*'
    }))
  ]),

  transition(':leave', [
    style({
      position: '*'
    }),
    animate('800ms ease-in-out', style({
      position: 'absolute',
      left: '-100%'
    }))
  ])
]);

export const slideInOutRight = trigger('slideInOutRight', [
  transition(':enter', [
    style({
      position: 'absolute',
      right: '-100%'
    }),
    animate('800ms ease-in', style({
      position: '*',
      right: '*'
    }))
  ]),

  transition(':leave', [
    style({
      position: '*',
      right: '*'
    }),
    animate('800ms ease-in-out', style({
      position: 'absolute',
      right: '-100%'
    }))
  ])
]);

export const slideInOut = trigger('slideInOut', [
  state('in', style({ })),
  state('out', style({
    width: '0',
    // transform: 'translate3d(100%, 0, 0)'
  })),
  transition('in => out', animate('400ms ease-in-out')),
  transition('out => in', animate('400ms ease-in-out'))
]);
