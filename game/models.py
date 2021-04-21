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
    puzzle_id = models.IntegerField(
        default=0, help_text='id of puzzle team is currently on')

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
