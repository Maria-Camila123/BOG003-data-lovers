import { filterChampions } from '../src/data.js';



describe('filterChampions', () => {
  it('is a function', () => {
    expect(typeof filterChampions).toBe('function');
  });

  it('should return 33', () => {
    expect(filterChampions('Assassin').length).toBe(33);
  });

  it('should return 24', () => {
    expect(filterChampions('Marksman').length).toBe(24);
  });
});
 



/*describe('showRoles', () => {
  it('is a function', () => {
    expect(typeof showRoles).toBe('function');
  });*/

 /* it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
