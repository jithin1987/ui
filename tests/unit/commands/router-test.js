import { moduleFor, test } from 'ember-qunit';

moduleFor('route:commands', 'Unit | Route | commands', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function (assert) {
  let route = this.subject();

  assert.ok(route);
});
