from django.db import models


class Profile(models.Model):
    """Model representing a player."""
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20)

    first_name = models.CharField(max_length=20, help_text='First name')
    last_name = models.CharField(max_length=20, help_text='Last name')
    team = models.ForeignKey('Team',
                             on_delete=models.SET_NULL,
                             blank=True,
                             null=True)
    role = models.IntegerField(default=0)

    def __str__(self):
        """String for representing the Model object."""
        return str(self.username)

    def save(self, *args, **kwargs):
        is_new = True if not self.id else False
        super(Profile, self).save(*args, **kwargs)
        if is_new:
            inventory = Inventory(user=self)
            erState = ERState(user=self)
            inventory.save()
            erState.save()


class Team(models.Model):
    """Model representing a team."""
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)
    puzzles_done = models.IntegerField(
        default=0, help_text='kth bit in binary represents if puzzle k solved')
    act = models.IntegerField(default=0, help_text='current act on')

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Puzzle(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)
    answer = models.CharField(max_length=50)
    link = models.CharField(max_length=150, blank=True, null=True)

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class PuzzleSubmission(models.Model):
    id = models.AutoField(primary_key=True)
    puzzle = models.ForeignKey('Puzzle', on_delete=models.CASCADE)
    team = models.ForeignKey('Team', on_delete=models.CASCADE)
    ts = models.DateTimeField(auto_now=True)


class MadLib(models.Model):
    id = models.AutoField(primary_key=True)
    profile_from = models.ForeignKey('Profile',
                                     on_delete=models.SET_NULL,
                                     related_name='profile_from',
                                     blank=True,
                                     null=True)
    profile_to = models.ForeignKey('Profile',
                                   on_delete=models.SET_NULL,
                                   related_name='profile_to',
                                   blank=True,
                                   null=True)
    # Comma separated for each field
    fields = models.CharField(max_length=350, blank=True, null=True)


class Inventory(models.Model):
    user = models.OneToOneField(Profile,
                                primary_key=True,
                                on_delete=models.CASCADE)
    matches = models.BooleanField(default=False)
    wrench = models.BooleanField(default=False)
    usb = models.BooleanField(default=False)
    soup = models.BooleanField(default=False)
    knife = models.BooleanField(default=False)
    paperclip = models.BooleanField(default=False)
    inkwell = models.BooleanField(default=False)


class ERState(models.Model):
    user = models.OneToOneField(Profile,
                                primary_key=True,
                                on_delete=models.CASCADE)
    closet_unlocked = models.BooleanField(default=False)
    spyroom_unlocked = models.BooleanField(default=False)
    lockers_unlocked = models.BooleanField(default=False)
    mechanics_unlocked = models.BooleanField(default=False)
    merchant_unlocked = models.BooleanField(default=False)
    electrical_box_unlocked = models.BooleanField(default=False)
    hologram_unlocked = models.BooleanField(default=False)
    scanning_unlocked = models.BooleanField(default=False)
    meme_unlocked = models.BooleanField(default=False)
    merchant_mc = models.IntegerField(default=0)
    spy_mc = models.IntegerField(default=0)
    mechanic_mc = models.IntegerField(default=0)