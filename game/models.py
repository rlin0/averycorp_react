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
    role = models.ForeignKey('Role',
                             on_delete=models.SET_NULL,
                             blank=True,
                             null=True)
    progress = models.IntegerField(default=0)

    def __str__(self):
        """String for representing the Model object."""
        return str(self.username)


class Team(models.Model):
    """Model representing a team."""
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)
    puzzles_done = models.IntegerField(
        default=0, help_text='kth bit in binary represents if puzzle k solved')

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Role(models.Model):
    """Model representing a role."""
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Puzzle(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)
    answer = models.CharField(max_length=50)
    link = models.CharField(max_length=150)

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
    type_id = models.ForeignKey('MadLibTypes',
                                on_delete=models.SET_NULL,
                                blank=True,
                                null=True)


class MadLibTypes(models.Model):
    id = models.AutoField(primary_key=True)
    # instructions for field
    prompts = models.CharField(max_length=350, blank=True, null=True)
    # Text where * is for each field
    text = models.CharField(max_length=600, blank=True, null=True)


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
    team = models.OneToOneField(Team,
                                primary_key=True,
                                on_delete=models.CASCADE)
    closet_unlocked = models.BooleanField(default=False)
    sewer_unlocked = models.BooleanField(default=False)
    lockers_unlocked = models.BooleanField(default=False)
    mechanics_unlocked = models.BooleanField(default=False)